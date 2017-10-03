(function() {
  angular
    .module("test", ["ngAria", "ngAnimate", "ngMaterial"])
    .controller("testController", function($scope, $mdDialog) {
      return ($scope.showDialog = function(evt) {
        return $mdDialog.show({
          controller: function($scope) {
            return angular.extend($scope, {
              user: {
                Name: "",
                email: "ipsum@lorem.com",
                visibility: "",
                Email: "",
                Owner:"",
                role:"",
                state:""
              },
              closeDialog: function() {
                return $mdDialog.hide();
              }
            });
          },
          templateUrl: "dialogContent.tmpl.html",
          targetEvent: evt
        });
      });
    });
}.call(this));
