define(["app", "marionette"], function(ContactManager, Marionette){
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
    }
  });

  var API = {
  };

  ContactManager.on("about:show", function(){
    ContactManager.navigate("about");
  });

  ContactManager.addInitializer(function(){
    new Router({
      controller: API
    });
  });

  return Router;
});
