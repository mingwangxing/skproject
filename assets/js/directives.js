// 'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('users', function() {
    return function(scope, element, attrs) {
      scope.usersOrder = 'name';

      // $(element).isotope({
      //   itemSelector : '.user',
      //   getSortData : {
      //     name : function ( $elem ) {
      //       return $elem.find('.name').text();
      //     },
      //     count : function ( $elem ) {
      //       return parseInt($elem.find('.count').text(), 10);
      //     }
      //   },
      //   sortBy : 'name'
      // });
      // $isotope = $(element).data('isotope');

    };
  }).
  directive('userIssues', function(socket){
    // console.log('socket : ', socket);

    return function(scope, element, attrs) {

      // console.log('scope : ', scope);
      // console.log('element : ', element);
      // console.log('attrs : ', attrs);

      scope.issuesOrder = '-priority.id';
      // scope.issueOrder = 'subject';

      $(element).find('.issues').hide();

      $(element).find('.showIssues').on('click', function(){
        console.log(this);
        var user = scope.user;
        if (!user.hasOwnProperty('issues')) {
          socket.emit('getUserIssues', user.id, function (err, issues) {
            // console.log(err, issues);
            // console.log('userIssue : ', issues);
            user.issues = issues;
            // test = issues;
            // console.log('user.issues : ', user.issues);
          });
        }
        $(this).toggleClass('badge')
          .find('i').toggleClass('icon-chevron-right icon-chevron-down');

        $(element).toggleClass('span4 span12')
          .find('.issues').slideToggle('fast', function () {
            $isotope.reLayout(function () {
              $.scrollTo($(element).offset().top - 50, 400);
            });
          });
      });

      scope.$watch(scope.user, function() {
        // element.isotope();
        $isotope.reLayout();
      });

      // $(element).on('click', function(){
      //   console.log(this);
      // });
    };
  }).
  directive('issue', function(socket){
    return function(scope, element, attrs) {

    };
  }).
  directive('timer', function(socket){
    return function(scope, element, attrs) {

      // console.log('scope : ', scope);
      // console.log('element : ', element);
      // console.log('attrs : ', attrs);
      var issue = scope.issue;

      $(element).find('.start').on('click', function(){
        console.log(scope);
        noty({text: 'start issue ' + issue.id, layout: 'topRight', timeout:3000});
        socket.emit('startIssue', issue.id, function (err, data) {
          console.log('err : ', err);
          console.log('data : ', data);
        });
      });

      $(element).find('.pause').on('click', function(){
        console.log(this);
        noty({text: 'pause issue', timeout:3000});
        socket.emit('pauseIssue',{} , function (err, data) {
          console.log('err : ', err);
          console.log('data : ', data);
        });
      });

      $(element).find('.stop').on('click', function(){
        console.log(this);
        noty({text: 'stop issue', timeout:3000});
        socket.emit('stopIssue', {}, function (err, data) {
          console.log('err : ', err);
          console.log('data : ', data);
        });
      });
    };
  });

