'use strict';

app.controller("myCtrl", function($scope) {
    // $scope.rows = [
    //     {
    //         "columns" : [
    //             {"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""},
    //             {"day" : "1", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "2", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "3", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "4", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "5", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "6", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"}
    //         ]
    //     },
    //     {
    //         "columns" : [
    //             {"day" : "7", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "8", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "9", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "10", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "11", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "12", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "13", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"}
    //         ]
    //     },
    //     {
    //         "columns" : [
    //             {"day" : "14", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "15", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "16", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "17", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "18", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "19", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "20", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"}
    //         ]
    //     },
    //     {
    //         "columns" : [
    //             {"day" : "21", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "22", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "23", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "24", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "25", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "26", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "27", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"}
    //         ]
    //     },
    //     {
    //         "columns" : [
    //             {"day" : "28", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "29", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "30", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "31", "clsMorning" : "bull-morning", "clsAfternoon" : "bull-afternoon", "clsEvening" : "bull-evening"},
    //             {"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""},
    //             {"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""},
    //             {"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""}
    //         ]
    //     },
    // ];

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

    $scope.generateCalendar = function(month, year) {
        var dateBegin = new Date();
        dateBegin.setFullYear(year, month - 1, 1);
        var dateEnd = new Date();
        dateEnd.setFullYear(year, month, 1);
        dateEnd.setDate(dateEnd.getDate() - 1);

        var firstDay = dateBegin.getDay();

        $scope.rows = [];
        var columns = [];
        var bolFound = false;
        var dateCounter = 1;
        var dayCounter = 0;

        /* START GENERATE FIRST WEEK */
        if (firstDay == 0) {
            for (dayCounter = 0; dayCounter < 6; dayCounter ++) {
               columns.push({"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""});
            }
            columns.push({"day" : "1", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""});
        } else {
            for (dayCounter = 1; dayCounter <= 6; dayCounter ++) {
                if (dayCounter < firstDay) {
                    if (!bolFound) {
                        columns.push({"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""});
                    }
                } else {
                    if (!bolFound) {
                        columns.push({"day" : "1", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""});
                        bolFound = true;
                    }
                }
            }
        }

        /* TO COMPLETE WEEK CYCLE */
        while (columns.length < 7) {
            columns.push({"day" : ++dateCounter, "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""});
        }
        
        /* PUSH IN FIRST WEEK OF MONTH */
        $scope.rows.push({"columns" : columns});

        /* END GENERATE FIRST WEEK */

        /* START GENERATE REST OF MONTH */
        var weekCounter = 1;
        columns = [];
        while (dateCounter < dateEnd.getDate()) {
            if (weekCounter <= 7) {
                weekCounter++;
                columns.push({"day" : ++dateCounter, "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""});
            } else {
                weekCounter = 1;
                $scope.rows.push({"columns" : columns});
                columns = [];
            }
        }

        /* TO COMPLETE WEEK CYCLE */
        while (columns.length < 7) {
            columns.push({"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""});
        }

        /* PUSH IN LAST WEEK OF MONTH */
        $scope.rows.push({"columns" : columns});

        /* END GENERATE REST OF MONTH */

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

    var date = new Date();
    $scope.currentMonth = date.getMonth() + 1;
    $scope.currentMonthName = $scope.getMonthName($scope.currentMonth);
    $scope.currentYear = 2017;
    $scope.generateCalendar($scope.currentMonth, $scope.currentYear);

});
