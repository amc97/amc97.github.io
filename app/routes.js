// Definindo Rotas
app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/login.html'            
        })
        .when('/about', {
            templateUrl: 'app/components/about/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'app/components/contact/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });

    // Utilizando o HTML5 History API
    $locationProvider.html5Mode(true);
});