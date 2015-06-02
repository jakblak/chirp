'use strict';

//  http://stackoverflow.com/questions/24490668/how-to-validate-email-id-in-angularjs-using-ng-pattern
app.directive('validateEmail', function() {
  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return {
    link: function(scope, elm) {
      elm.on("keyup",function(){
            var isMatchRegex = EMAIL_REGEXP.test(elm.val());
            if( isMatchRegex&& elm.hasClass('warning')){
              elm.removeClass('warning');
            }else if(isMatchRegex == false && !elm.hasClass('warning')){
              elm.addClass('warning');
            }
      });
    }
  }
});