!SLIDE big ====================================================================================

<div>
![](angularjs-500px.png)
</div>


!SLIDE small ===========================

<br/>

<table class="left" style="margin: 20px 0 40px 120px">
<tr>
<td><img src="data/conf/GDE-2014-Angular JS.svg" width="150px"></td>
<td class="biggest" nowrap>
Thierry Chatel<br/>
<img src="data/conf/methotic.png" width="330px">
&nbsp;&nbsp;&nbsp;
<img src="data/conf/crealead.jpg" width="125px">
</td>
</tr>
</table>

### _Consultant indépendant et formateur AngularJS_

<table class="left" style="margin-left: 200px; padding: 50px">
<tr>
<tr><td>![](i-m.png)</td><td>tchatel@methotic.com</td></tr>
<tr><td>![](i-tw.png)</td><td>@ThierryChatel</td></tr>
<tr><td>![](i-gp.png)</td><td>+ThierryChatel</td></tr>
<tr><td>![](i-gh.png)</td><td>tchatel</td></tr>
</table>




!SLIDE subsection ====================================================================================

# Angular, 
# qu'est-ce que c'est ?

!SLIDE ============================

# client-serveur
## dans le navigateur web

!SLIDE ============================

# client Angular
## (UI)
<br/>
# serveur REST
## (données)

!SLIDE image ============================

![](one-way-db.png)

!SLIDE image ============================

![](two-way-db.png)

!SLIDE ============================

# by Google
### open source
### licence Apache 2 / MIT
### sur GitHub

!SLIDE image ============================

![](img-trends.png)

!SLIDE ============================

## UX : user experience
<br/>
## + developer experience



!SLIDE subsection ====================================================================================

# les usages

!SLIDE bullets ============================

* Single Page Application
* appli dans une portion de page <span class="small">_(plus rare)_</span><br/>
  <span class="small">ex : [BGG](https://boardgamegeek.com/boardgame/12333/twilight-struggle)</span>
* appli web mobile

!SLIDE image ============================

[![](renault.png)](http://www.renaultshop.fr/)

!SLIDE image ============================

![](voyage-sncf.png)

!SLIDE image ============================

![](borne-sncf.jpg)

!SLIDE image ============================

![](ryanair.png)

!SLIDE image ============================

![](apple-developer-search.png)

!SLIDE image ============================

![](amazon-kindle.png)

!SLIDE image ============================

![](pole-emploi.png)

!SLIDE image ============================

[![](made-with-angular.png)](https://www.madewithangular.com/)

!SLIDE image ============================

[![](ionic.png)](http://showcase.ionicframework.com/)

!SLIDE  ============================

# SEO



!SLIDE subsection ====================================================================================

# le contenu

!SLIDE bullets ============================

* templates déclaratifs, en HTML (étendu)
* data binding
* création de composants (directives)
* services & injection de dépendances
* tests unitaires
* tests fonctionnels

!SLIDE image smallest ============================

    <html ng-app="todoApp">
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/
                 1.4.8/angular.min.js"></script>
      <script src="todo.js"></script>
      <link rel="stylesheet" href="todo.css">
    </head>
    <body>
      <h2>Todo</h2>
      <div ng-controller="TodoListController">
        <span>{{remaining()}} of {{todos.length}} remaining</span>
        [ <a href="" ng-click="archive()">archive</a> ]
        <ul>
          <li ng-repeat="todo in todos">
            <input type="checkbox" ng-model="todo.done">
            <span ng-class="{done: todo.done}">{{todo.text}}</span>
          </li>
        </ul>
        <form ng-submit="addTodo()">
          <input type="text" ng-model="todoText">
          <input type="submit" value="add">
        </form>
      </div>
    </body>
    </html>

!SLIDE image smallest ============================

    angular.module('todoApp', [])
        .controller('TodoListController', function($scope) {
    
            $scope.todos = [
                {text:'learn angular', done:true},
                {text:'build an angular app', done:false}
            ];
    
            $scope.addTodo = function() {
                $scope.todos.push({text:$scope.todoText, done:false});
                $scope.todoText = '';
            };
    
            $scope.remaining = function() {
                return $scope.todos.reduce(function (count, todo) {
                    return count + (todo.done ? 0 : 1);
                }, 0);
            };
    
            $scope.archive = function() {
                $scope.todos = $scope.todos.filter(function (todo) {
                    return !todo.done;
                });
            };
        });

!SLIDE ============================

## pas de composants UI fournis
### (autres que ceux du HTML)

!SLIDE ============================

## bibliothèques 
## de composants 

!SLIDE image ============================

[![](angular-material.png)](https://material.angularjs.org/latest/demo/autocomplete)

!SLIDE image ============================

[![](lumx.png)](http://ui.lumapps.com/directives/dropdowns)

!SLIDE image ============================

[![](ionic-components.png)](http://ionicframework.com/docs/components/)

!SLIDE image ============================

![](angular-ui.png)

!SLIDE image ============================

[![](ui-bootstrap.png)](https://angular-ui.github.io/bootstrap/)

!SLIDE image ============================

[![](angularstrap.png)](http://mgcrea.github.io/angular-strap/)



!SLIDE subsection ====================================================================================

# Angular 2

!SLIDE ============================

## même idées 
## nouvelle implémentation
### (plus moderne)

!SLIDE bullets ============================

* Web Components
* davantage orienté composants
* syntaxe unifiée des templates 
* moteur d'injection de dépendances
* vrais modules

!SLIDE ============================

## écrit en TypeScript
### applications en TypeScript, ES6, ES5 ou Dart

!SLIDE ============================

## version beta

!SLIDE bullets ============================

#### écosystème Angular 2 encore balbutiant 

* framework
* documentation, articles, stackoverflow
* composants
* exemples
* recul & bonnes pratiques
* expérience des développeurs

!SLIDE bullets ============================

## lequel utiliser ? 

* appli en prod rapidement : **Angular 1**
* exploration, veille techno : **Angular 2**



!SLIDE subsection ====================================================================================

# le TP

!SLIDE ============================

## en Angular 1

!SLIDE image ============================

![](tp.png)




