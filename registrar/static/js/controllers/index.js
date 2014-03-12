/**
 * Created by nealshultz on 3/12/14.
 */
function IndexCtrl($scope, $http) {
    $http.get('/api/v1/student/?format=json').
        success(function(students) {
            $scope.students = students.objects;
        });

}