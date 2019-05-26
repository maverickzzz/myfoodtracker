<?php 
require_once 'Db.php';

class Foodlist {

	public static function getList() {
		$month = $_REQUEST['periodmonth'];
		$year = $_REQUEST['periodyear'];

		$dbh = new Db();
		$query = "select DAY(history_date) as day, det_morning, det_afternoon, det_evening, uihong_severity_morning, uihong_severity_afternoon, uihong_severity_evening, got_poop, got_bleed from track_date where MONTH(history_date) = ? and YEAR(history_date) = ?";

		$stmt = $dbh->prepare($query);
		$stmt->execute(array($month, $year));
		$list = array();
		while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
			$newrow = array();
			$newrow['day'] = $row['day'];
			$newrow['clsMorning'] = ''; if ($row['det_morning'] != '' && $row['det_morning'] != NULL) $newrow['clsMorning'] = 'bull-morning';
			$newrow['clsAfternoon'] = ''; if ($row['det_afternoon'] != '' && $row['det_afternoon'] != NULL) $newrow['clsAfternoon'] = 'bull-afternoon';
			$newrow['clsEvening'] = ''; if ($row['det_evening'] != '' && $row['det_evening'] != NULL) $newrow['clsEvening'] = 'bull-evening';
			$newrow['clsUihongSeverityMorning'] = 0; if ($row['uihong_severity_morning'] != '' && $row['uihong_severity_morning'] != NULL) $newrow['clsUihongSeverityMorning'] = 'bull-uihong-severity-' . $row['uihong_severity_morning'];
			$newrow['clsUihongSeverityAfternoon'] = 0; if ($row['uihong_severity_afternoon'] != '' && $row['uihong_severity_afternoon'] != NULL) $newrow['clsUihongSeverityAfternoon'] = 'bull-uihong-severity-' . $row['uihong_severity_afternoon'];
			$newrow['clsUihongSeverityEvening'] = 0; if ($row['uihong_severity_evening'] != '' && $row['uihong_severity_evening'] != NULL) $newrow['clsUihongSeverityEvening'] = 'bull-uihong-severity-' . $row['uihong_severity_evening'];
			$newrow['clsGotPoop'] = 0; if ($row['got_poop'] == 1) $newrow['clsGotPoop'] = 'bull-got-poop';
			$newrow['clsGotBleed'] = 0; if ($row['got_bleed'] == 0) $newrow['clsGotBleed'] = 'bull-got-bleed-0'; if ($row['got_bleed'] == 1) $newrow['clsGotBleed'] = 'bull-got-bleed-1'; if ($row['got_bleed'] == 2) $newrow['clsGotBleed'] = 'bull-got-bleed-2'; if ($row['got_bleed'] == 3) $newrow['clsGotBleed'] = 'bull-got-bleed-3';
			array_push($list, $newrow);
		}

		echo json_encode($list);
	}

	public static function getDetail() {
		$dbh = new Db();		

		if (isset($_REQUEST['submit'])) {

			$data_morning = $_REQUEST['morning'];
			$data_afternoon = $_REQUEST['afternoon'];
			$data_evening = $_REQUEST['evening'];
			$history_date = date('Y-m-d', strtotime($_REQUEST['historydate']));
			$uihong_severity_morning = intval($_REQUEST['uihong_severity_morning']);
			$uihong_severity_afternoon = intval($_REQUEST['uihong_severity_afternoon']);
			$uihong_severity_evening = intval($_REQUEST['uihong_severity_evening']);
			$got_poop = intval($_REQUEST['got_poop']);
			$got_bleed = intval($_REQUEST['got_bleed']);

			$query = "select * from track_date where history_date = ?";
			$stmt = $dbh->prepare($query);
			$stmt->execute(array($history_date));

			if ($stmt->rowCount() > 0) {
				$query = "update track_date set det_morning = ?, det_afternoon = ?, det_evening = ?, uihong_severity_morning = ?, uihong_severity_afternoon = ?, uihong_severity_evening = ?, got_poop = ?, got_bleed = ? where history_date = ?";
				$stmt = $dbh->prepare($query);
				$stmt->execute(array($data_morning, $data_afternoon, $data_evening, $uihong_severity_morning, $uihong_severity_afternoon, $uihong_severity_evening, $got_poop, $got_bleed, $history_date));
			} else {
				$query = "insert into track_date values(?, ?, ?, ?, ?, ?, ?, ?, ?)";
				$stmt = $dbh->prepare($query);
				$stmt->execute(array($history_date, $data_morning, $data_afternoon, $data_evening, $uihong_severity_morning, $uihong_severity_afternoon, $uihong_severity_evening, $got_poop, $got_bleed));
			}
		
		} else {
			$historydate = date('Y-m-d', strtotime($_REQUEST['periodyear'] . '-' . substr('0' . strval($_REQUEST['periodmonth']), -2) . '-' . substr('0' . strval($_REQUEST['periodday']), -2)));

			$query = "select * from track_date where history_date = ?";

			$stmt = $dbh->prepare($query);
			$stmt->execute(array($historydate));
			$list = array();
			while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
				$newrow = array();
				$newrow['historydate'] = $row['history_date'];
				$newrow['det_morning'] = ''; if ($row['det_morning'] != NULL) $newrow['det_morning'] = $row['det_morning'];
				$newrow['det_afternoon'] = ''; if ($row['det_afternoon'] != NULL) $newrow['det_afternoon'] = $row['det_afternoon'];
				$newrow['det_evening'] = ''; if ($row['det_evening'] != NULL) $newrow['det_evening'] = $row['det_evening'];
				$newrow['uihong_severity_morning'] = 0; if ($row['uihong_severity_morning'] != NULL) $newrow['uihong_severity_morning'] = $row['uihong_severity_morning'];
				$newrow['uihong_severity_afternoon'] = 0; if ($row['uihong_severity_afternoon'] != NULL) $newrow['uihong_severity_afternoon'] = $row['uihong_severity_afternoon'];
				$newrow['uihong_severity_evening'] = 0; if ($row['uihong_severity_evening'] != NULL) $newrow['uihong_severity_evening'] = $row['uihong_severity_evening'];
				$newrow['got_poop'] = 0; if ($row['got_poop'] != NULL) $newrow['got_poop'] = $row['got_poop'];
				$newrow['got_bleed'] = 0; if ($row['got_bleed'] != NULL) $newrow['got_bleed'] = $row['got_bleed'];

				array_push($list, $newrow);
			}
			if (count($list) <= 0) {
				$newrow = array();
				$newrow['historydate'] = $historydate;
				$newrow['det_morning'] = '';
				$newrow['det_afternoon'] = '';
				$newrow['det_evening'] = '';
				$newrow['uihong_severity_morning'] = 0;
				$newrow['uihong_severity_afternoon'] = 0;
				$newrow['uihong_severity_evening'] = 0;
				$newrow['got_poop'] = 0;
				$newrow['got_bleed'] = 0;

				array_push($list, $newrow);
			}

			echo json_encode($list);
		}
	}

}

?>