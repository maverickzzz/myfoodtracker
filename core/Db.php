<?php
require_once 'config.php';

class Db extends PDO{
	function __construct() {
		global $config;
		$dbhost = $config['dbhost'];
		$dbname = $config['dbname'];
		$dbuser = $config['dbuser'];
		$pwd = $config['dbpwd'];
		parent::__construct("mysql:host=$dbhost;dbname=$dbname",
			$dbuser, $pwd);
	}
	
	public function doDbMaintenance(){
		$this->exec("delete from accesstoken where expiry < now()");
		$this->exec("delete from newuser where created < date_add(now(), interval 7 day)");
	}
}
?>