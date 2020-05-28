'use strict' //Подключите строгий режим выполнения кода
let userForm = new UserForm(); //Создайте объект класса UserForm
const loginForm = _getData(form);
userForm.loginFormCallback = function(data){ //Присвойте свойству loginFormCallback созданного объекта значение функции, которая в качестве аргумента принимает объект data
//Функция должна выполнять запрос на сервер для попытке авторизации пользователя (авторизацию пользователя выполняйте с помощью ApiConnector.login)
loginFormAction(data);//Передайте в запрос авторизации функцию, которая будет выполняться при попытке авторизации
    if (request){ //В случае успеха запроса обновите страницу 
	   location.reload();
    } else{
	   return setLoginErrorMessage(message);//В случае провала запроса выведите ошибку в окно для ошибок
    }
}

userForm.registerFormCallback = function(data){
	registerFormAction(data);//Передайте запрос на регистрацию.
//Напишите колбек, который будет выполняться после запроса.
  if (request){ //В случае успеха запроса обновите страницу 
	   location.reload();
    } else{
	   return setRegisterErrorMessage(message);//В случае провала запроса выведите ошибку в окно для ошибок
    }
}
