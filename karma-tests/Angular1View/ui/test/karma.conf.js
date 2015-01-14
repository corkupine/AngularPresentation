module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'components/lib/angular/angular.js',
      'components/lib/angular-route/angular-route.js',
      'components/lib/angular-resource/angular-resource.js',
      'components/lib/angular-mocks/angular-mocks.js',
      'components/lib/angular-ui-router/release/angular-ui-router.js',
      'app/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
