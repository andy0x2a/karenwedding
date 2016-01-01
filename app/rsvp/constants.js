
angular.module('myApp.constants', [])
    .service('constants', function () {
        return {
            config: {
                 apiBase: "http://localhost:8080",
                //apiBase: "http://andyandemilywedding-env.elasticbeanstalk.com"


            }
        }
    });
