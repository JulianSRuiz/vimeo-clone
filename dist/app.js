import angular from "angular";
import uiRouter from "angular-ui-router";
import "./styles.css";
import mainCtrl from "./controllers/mainCtrl.js";
import homeHtml from './views/home.html';
import welcomeHtml from './views/welcome.html';
import favorites from './views/favorites.html';
import loginerror from './views/loginerror.html';
import "jquery"
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
// import "!style!css!sass!./file.scss"




angular.module("vimeoApp", [uiRouter])
  .controller('mainCtrl', mainCtrl)
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        template: homeHtml
      })
      .state('welcome', {
        url: '/welcome',
        template: welcomeHtml
      })
      .state('favorites', {
        url: "/favorites",
        template: favorites
      })
      .state('loginerror', {
        url: "/loginerror",
        template: loginerror
      })
  });
