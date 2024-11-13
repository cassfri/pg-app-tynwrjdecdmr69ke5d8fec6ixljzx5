/*
* Simple Cloud Code Example
*/

Parse.Cloud.define('hello', function (request, response)
{
  response.success("Hello from SashiDo's Simple Cloud Code :)");
});

Parse.Cloud.define('getDate', function (request, response)
{ var today = new Date();
  response.success(today);
});

Parse.Cloud.define("signUpUser", function(request, response) {
	var user = new Parse.User();
	user.set("username", request.params.user);
	user.set("password", request.params.pass);
	user.set("email", request.params.nombre);	
	
	user.signUp(null, {
	  success: function(user) {
		response.success(user);
	  },
	  error: function(user, error) {
		// Show the error message somewhere and let the user try again.
		response.error("Error: " + error.code + " " + error.message);
	  }
	});
  });


Parse.Cloud.define("getString", function(request, response) {
  var Clientes = Parse.Object.extend("Clientes");
  var query = new Parse.Query(Clientes);
  query.contains( "Nombre", request.params.substring );
  query.find({
    success: function(results) {
      response.success(results);
    },
    error: function(error) {
      response.error("sin resultados");
    }
  });
});
