saludalosojos.factory("Cookie", function ($rootScope, $window){
  var interfaz = {
    CookieName: "saludalosojos",

    setCookie: function (callback){
      var d = new Date();
      d.setTime(d.getTime() + (1000 * 60 * 60 * 24 * 7));
      var expires = "expires="+d.toGMTString();
      document.cookie = this.CookieName + "=OfAge; " + expires;
      if (callback) callback();
      return this;
    },

    checkCookie: function (callbacks){
      var name = this.CookieName + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
          if (callbacks) {
            if (callbacks.success)
              callbacks.success();
          }
          return c.substring(name.length,c.length);
        }
      }
      if (callbacks) {
          if (callbacks.error)
            callbacks.error();
        }
      return false;
    }
  }
  return interfaz;
});
