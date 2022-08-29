api = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=c5fa5112984ef1d54f8eb90a645bba36&units=metric'

var weatherApp=angular.module('weatherApp', []);

weatherApp.controller('WeatherCtrl', function ($scope, $http){
    $scope.CurrentDate = new Date();
    $scope.searchWeather = function (){
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${$scope.search}&appid=c5fa5112984ef1d54f8eb90a645bba36&units=metric`;
        $scope.getApi(api);
    }

    $scope.getApi = function (api){
        $http.get(api).success(function (data) {
            if (data) {
                $scope.city=data.sys.country;
                $scope.country=data.name;
                $scope.current=data.main.temp;
                $scope.temp_min=data.main.temp_min;
                $scope.temp_max=data.main.temp_max;
                $scope.wind_speed=data.wind.speed;
                $scope.clouds=data.clouds ? data.clouds.all : undefined;


                var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                if ($scope.clouds<20) {
                    $scope.img_url=baseUrl + 'sunny.png';
                }else if ($scope.clouds<90) {
                    $scope.img_url = baseUrl + 'partly_cloudy.png';
                } else {
                    $scope.img_url = baseUrl + 'cloudy.png';
                }
            }
        })
        .error(function (data, status){
            console.log(data);

        });
    }
    $scope.getApi(api)
});