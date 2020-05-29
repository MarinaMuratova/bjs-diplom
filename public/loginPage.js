'use strict' 
let userForm = new UserForm(); 
userForm.loginFormCallback = function(data){ 
 ApiConnector.login(data, (response) => {
    if (response.success){ 
       location.reload();
    } else{
       return setLoginErrorMessage(message);
    }
  });   
}

userForm.registerFormCallback = function(data){
 ApiConnector.login(data, (response) => {
    if (response.success){ 
       location.reload();
    } else{
       return setLoginErrorMessage(message);
    }
  });   
}