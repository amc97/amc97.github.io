app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/plantoes.html',
        controller: 'plantoesCtrl'
    })
    .when('/cadastrar-funcionario', {
        templateUrl: 'views/cadastro_funcionario.html',
        controller: 'plantoesCtrl'
    })
    .when('/cadastrar-medico', {
        templateUrl: 'views/cadastro_medico.html',
        controller: 'plantoesCtrl'
    })
    .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'plantoesCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
})
