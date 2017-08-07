app.controller("myCtrl", function($scope) {
    $scope.rows = [
        {
            "week" : "1",
            "columns" : [
                {"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""},
                {"day" : "1", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "2", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "3", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "4", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "5", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "6", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"}
            ]
        },
        {
            "week" : "2",
            "columns" : [
                {"day" : "7", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "8", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "9", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "10", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "11", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "12", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "13", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"}
            ]
        },
        {
            "week" : "3",
            "columns" : [
                {"day" : "14", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "15", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "16", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "17", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "18", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "19", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "20", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"}
            ]
        },
        {
            "week" : "4",
            "columns" : [
                {"day" : "21", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "22", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "23", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "24", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "25", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "26", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "27", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"}
            ]
        },
        {
            "week" : "5",
            "columns" : [
                {"day" : "28", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "29", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "30", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "31", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
                {"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""},
                {"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""},
                {"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""}
            ]
        },
    ];

    $scope.months = [
        {"monthNo" : 1, "monthName" : "January"},
        {"monthNo" : 2, "monthName" : "February"},
        {"monthNo" : 3, "monthName" : "March"},
        {"monthNo" : 4, "monthName" : "April"},
        {"monthNo" : 5, "monthName" : "May"},
        {"monthNo" : 6, "monthName" : "June"},
        {"monthNo" : 7, "monthName" : "July"},
        {"monthNo" : 8, "monthName" : "August"},
        {"monthNo" : 9, "monthName" : "September"},
        {"monthNo" : 10, "monthName" : "October"},
        {"monthNo" : 11, "monthName" : "November"},
        {"monthNo" : 12, "monthName" : "December"},
    ];

    $scope.getMonthName = function(month) {
        return $scope.months[month - 1].monthName;
    }

    date = new Date();
    $scope.currentMonth = date.getMonth() + 1;
    $scope.currentMonthName = $scope.getMonthName($scope.currentMonth);
    $scope.currentYear = 2017;

    $scope.generateCalendar = function(month, year) {
        firstDay
        firstDate
        lastDay
        lastDate

        $scope.rows = [];
        while (firstDate <= lastDate) {
            for (intCounter = 0 ; intCounter < 7 ; intCounter++) {
                
            }
            firstDate++;
        }

    }

    $scope.prevMonth = function() {
        if ($scope.currentMonth == 1) {
            $scope.currentMonth = 12;
            $scope.currentYear -= 1;
        } else {
            $scope.currentMonth -= 1;
        }
        $scope.currentMonthName = $scope.getMonthName($scope.currentMonth);
        $scope.generateCalendar($scope.currentMonth, $scope.currentYear);
    }

    $scope.nextMonth = function() {
        if ($scope.currentMonth == 12) {
            $scope.currentMonth = 1;
            $scope.currentYear += 1;
        } else {
            $scope.currentMonth += 1;
        }
        $scope.currentMonthName = $scope.getMonthName($scope.currentMonth);
        $scope.generateCalendar($scope.currentMonth, $scope.currentYear);
    }

});
