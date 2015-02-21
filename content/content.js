$scope.initPolymer = function () {
    Polymer('eclip-dictate', {
        ready: function () {
            this.settings = $scope.settings;
        }
    });
};