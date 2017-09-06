app.controller("calendarCtrl", function ($scope) {
    $scope.day = moment();
});

app.controller("loginCtrl", function($scope, $firebaseAuth){
    $scope.authObj = $firebaseAuth();
    
    $scope.login = function(login, senha){
        $scope.authObj.$signInWithEmailAndPassword(login, senha).then(
            function(firebaseUser){
                console.log("Signed in as:", firebaseUser.uid);
                location.assign("index.html");
            }
        ).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode == 'auth/invalid-email') {
                alert('Email invalido.');
            } else if (errorCode == 'auth/user-not-found') {
                alert('Usuário não encontrado');
            } else if (errorCode == 'auth/wrong-password') {
                alert('Senha incorreta');
            }
            console.log('erro de auth: ', error);
        });
    }    
});

app.controller("plantoesCtrl", function ($scope, $firebaseArray, $filter, $firebaseAuth) {
    $scope.authObj = $firebaseAuth();
    
    $scope.authObj.$onAuthStateChanged(function(firebaseUser) {
        if (!firebaseUser) {
            location.assign('login.html');
        }
    });
    
    var refFuncionarios = firebase.database().ref().child("bd/funcionarios");
    var refMedicos = firebase.database().ref().child("bd/medicos");
    var refPlantoes = firebase.database().ref().child("bd/plantoes");    
    
    $scope.plantoes = $firebaseArray(refPlantoes);
    
    $scope.ano = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    $scope.mes = moment().format("MMM, YYYY");    
    
    $scope.medicos = $firebaseArray(refMedicos);
    
    $scope.funcionarios = $firebaseArray(refFuncionarios);
    
    $scope.horarios = ["07:00 a 19:00", "19:00 a 07:00", "07:00 a 07:00", "19:00 a 19:00"];    
    
    $scope.addPlantao = function (plantao) {
        plantao.data = $filter('date')(plantao.data, 'dd-MM-yyyy');
        $scope.plantoes.$add({            
            data: plantao.data,
            medico: plantao.medico,
            horario: plantao.horario
        });
        console.log("enviou plantao");
        delete $scope.plantao;
    };
    
    $scope.apagaPlantao = function (plantao){        
        $scope.plantoes.$remove(plantao);
        console.log("apagou plantao");
    };
    
    $scope.addFuncion = function(fun){
        $scope.funcionarios.$add(fun);
        console.log("cadastrou funcionário");
        delete $scope.fun;
    };
    
    $scope.apagaFuncion = function (fun){        
        $scope.funcionarios.$remove(fun);
        console.log("apagou funcionario");
    };
    
    $scope.addMedico = function(med){
        $scope.medicos.$add(med);
        console.log("cadastrou medico");
        delete $scope.med;
    };
    
    $scope.apagaMed = function (med){        
        $scope.medicos.$remove(med);
        console.log("apagou medico");
    };
})