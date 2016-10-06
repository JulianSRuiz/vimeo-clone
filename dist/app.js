import angular from "angular";
import uiRouter from "angular-ui-router";
import "./styles.css";
import homeHtml from '../views/home.html';
import welcomeHtml from '../views/welcome.html';
import recently-watched from '../views/recently-watched.html';
import favorites from '../views/favorites.html';
import login-error from '../views/loginerror.html';
// import vimeoCtrl from "vimeoCtrl";

angular.module("vimeoApp", [uiRouter])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/#/home',
        templateUrl: homeHtml
      })
      .state('welcome', {
        url: '/#/welcome',
        templateUrl: welcomeHtml
      })
      .state('recently-watched', {
        url: "/#/recently-watched",
        templateUrl: recently-watched
        // controller: "vimeoCtrl"
      })
      .state('favorites', {
        url: "/#/favorites",
        templateUrl: favorites
      })
      .state('login-error', {
        url: "/#/login-error",
        template: login-error
        // controller: "vimeoCtrl"
      })
  });
