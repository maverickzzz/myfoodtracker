app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.filteredproducts = $scope.products;
    $scope.errortext = "";

    $scope.addItem = function() {
        $scope.errortext = "";
        if (!$scope.addMe) { return; }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "<strong>" + $scope.addMe + "</strong> is already in your shopping list.";
        }
        $scope.addMe = "";
    }

    $scope.removeItem = function(index) {
        $scope.errortext = "";
        $scope.products.splice(index, 1);
    }

    $scope.filterItem = function() {
        for (i = 0; i < $scope.products.length; i++) {
            if (substring)
        }
        $scope.errortext = $scope.filterMe;
    }
});
