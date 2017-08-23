'use strict';

app.service("myService", function() {
    var date = new Date(),
        currentMonth = date.getMonth() + 1,
        currentYear = date.getFullYear(),
        months = [
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

    this.getMonth = function() {
        return currentMonth;
    }

    this.getMonthName = function() {
        return months[currentMonth - 1].monthName;
    }

    this.getYear = function() {
        return currentYear;
    }

    this.nextMonth = function() {
        if (currentMonth == 12) {
            currentMonth = 1;
            currentYear += 1;
        } else {
            currentMonth += 1;
        }
    }

    this.prevMonth = function() {
        if (currentMonth == 1) {
            currentMonth = 12;
            currentYear -= 1;
        } else {
            currentMonth -= 1;
        }
    }
});

app.controller("myCtrlMain", function($scope, $http, myService) {
    
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
                if (!bolFound) {
                    if (dayCounter < firstDay) {
                        columns.push({"day" : "", "clsMorning" : "", "clsAfternoon" : "", "clsEvening" : ""});
                    } else {
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

        var dataCollection = [];

        $http({
            method: 'POST',
            url: 'core/index.php/Foodlist/getList',
            params: {
                'periodmonth': month,
                'periodyear' : year
            }
        }).then(function(obj) {
            dataCollection = obj.data;

            for (weekCounter = 0; weekCounter < $scope.rows.length; weekCounter++) {
                for (dayCounter = 0; dayCounter < $scope.rows[weekCounter].columns.length; dayCounter++) {
                    var dataCounter = 0;
                    for (dataCounter = 0; dataCounter < dataCollection.length; dataCounter++) {
                        if ($scope.rows[weekCounter].columns[dayCounter].day == dataCollection[dataCounter].day) {
                            $scope.rows[weekCounter].columns[dayCounter].clsMorning = dataCollection[dataCounter].clsMorning;
                            $scope.rows[weekCounter].columns[dayCounter].clsAfternoon = dataCollection[dataCounter].clsAfternoon;
                            $scope.rows[weekCounter].columns[dayCounter].clsEvening = dataCollection[dataCounter].clsEvening;
                            $scope.rows[weekCounter].columns[dayCounter].clsUihongSeverity = dataCollection[dataCounter].clsUihongSeverity;
                            $scope.rows[weekCounter].columns[dayCounter].clsGotPoop = dataCollection[dataCounter].clsGotPoop;
                            break;                 
                        }
                    }
                }
            }
        });
    }

    $scope.prevMonth = function() {
        myService.prevMonth();
        $scope.currentMonthName = myService.getMonthName();
        $scope.currentYear = myService.getYear();
        $scope.generateCalendar(myService.getMonth(), myService.getYear());
    }

    $scope.nextMonth = function() {
        myService.nextMonth();
        $scope.currentMonthName = myService.getMonthName();
        $scope.currentYear = myService.getYear();
        $scope.generateCalendar(myService.getMonth(), myService.getYear());
    }

    $scope.currentMonthName = myService.getMonthName();
    $scope.currentYear = myService.getYear();
    $scope.generateCalendar(myService.getMonth(), myService.getYear());

});

app.controller("myCtrlDetail", function($scope, $http, $routeParams, myService, $location) {
    var dataCollection = [];

    $scope.categories = [{
        id: 'morning',
        desc: 'Morning'
        }, {
        id: 'afternoon',
        desc: 'Afternoon'
        }, {
        id: 'evening',
        desc: 'Evening'
    }];

    var date = new Date();
    var hour = date.getHours();

    $scope.category = 'morning';
    if (hour < 12) {
        $scope.category = 'morning';
    } else if (hour < 16) {
        $scope.category = 'afternoon';
    } else {
        $scope.category = 'evening';
    }

    $http({
        method: 'POST',
        url: 'core/index.php/Foodlist/getDetail',
        params: {
            'periodday'  : $routeParams.day,
            'periodmonth': myService.getMonth(),
            'periodyear' : myService.getYear()
        }
    }).then(function(obj) {
        dataCollection = obj.data;

        $scope.historydate = dataCollection[0].historydate;
        $scope.det_morning = (dataCollection[0].det_morning == '' ? '' : JSON.parse(dataCollection[0].det_morning));
        $scope.det_afternoon = (dataCollection[0].det_afternoon == '' ? '' : JSON.parse(dataCollection[0].det_afternoon));
        $scope.det_evening = (dataCollection[0].det_evening == '' ? '' : JSON.parse(dataCollection[0].det_evening));
        $scope.uihong_severity_morning = dataCollection[0].uihong_severity_morning;
        $scope.got_poop = dataCollection[0].got_poop;
    });

    $scope.addFood = function(){
        if ($scope.food) {
            if ($scope.category == 'morning') {
                if ($scope.det_morning.length <= 0) {
                    $scope.det_morning = [];
                }
                if ($scope.det_morning.indexOf($scope.food) < 0) {
                    $scope.det_morning.push($scope.food.trim());    
                }                
            }
            if ($scope.category == 'afternoon') {
                if ($scope.det_afternoon.length <= 0) {
                    $scope.det_afternoon = [];
                }
                if ($scope.det_afternoon.indexOf($scope.food) < 0) {
                    $scope.det_afternoon.push($scope.food.trim());    
                }                
            }
            if ($scope.category == 'evening') {
                if ($scope.det_evening.length <= 0) {
                    $scope.det_evening = [];
                }
                if ($scope.det_evening.indexOf($scope.food) < 0) {
                    $scope.det_evening.push($scope.food.trim());    
                }                
            }
            $scope.food = "";
        }
    }

    $scope.saveFood = function(){
        $http({
            method: 'POST',
            url: 'core/index.php/Foodlist/getDetail',
            params: {
                'submit'     : true,
                'morning'  : ($scope.det_morning.length > 0 ? angular.toJson($scope.det_morning) : ''),
                'afternoon': ($scope.det_afternoon.length > 0 ? angular.toJson($scope.det_afternoon) : ''),
                'evening' : ($scope.det_evening.length > 0 ? angular.toJson($scope.det_evening) : ''),
                'historydate' : $scope.historydate,
                'uihong_severity_morning' : $scope.uihong_severity_morning,
                'got_poop' : $scope.got_poop
            }
        }).then(function(obj) {
            $location.path("/");
        });
    }

    $scope.deleteFood = function(id, category) {
        if (category == 'morning') {
            $scope.det_morning.splice(id, 1);
        } else if (category == 'afternoon') {
            $scope.det_afternoon.splice(id, 1);
        } else if (category == 'evening') {
            $scope.det_evening.splice(id, 1);
        }
    }

    $scope.cancelFood = function(){
        $location.path("/");
    }
});