function portal() {
	  var person = prompt("Name required", "");
	  var person2 = prompt("Email required", "");
    if (person == "") {
    	console.log(person);
    	window.location.href = "/#/secure";
    	console.log(person2);
    }
    else {
    	console.log(person);
    	window.location.href = "/#/secure";
    	console.log(person2);
    	$scope.addPerson = function(){

    	}
  //   	$scope.addStudent = function (){
		//     // add to the array
		//     $scope.students.push($scope.newStudent); 
		//     // clear the form values
		//     $scope.newStudent = {};
		// }
    }
};