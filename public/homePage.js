//Выход из личного кабинета
const logoutButton = new LogoutButton();
logoutButton.action = function (){
	ApiConnector.logout((response) => {
		if (response.success){ 
          location.reload();
        }
	});
}

//Получение информации о пользователе
ApiConnector.current((response) => {
   if (response.success){ 
          ProfileWidget.showProfile(response.data);
    }
})


//Получение текущих курсов валюты
const ratesBoard = new RatesBoard();
function getStocks (){
	ApiConnector.getStocks((response) =>{
       if(response.success){
       	ratesBoard.clearTable();
        ratesBoard.fillTable(response.data);
       }
	});
}

setInterval(getStocks, 60000); //было setInterval(() => getStocks(), 60000); новая запись короче


//Операции с деньгами
const moneyManager = new MoneyManager();
//пополнение баланса
moneyManager.addMoneyCallback = function(data){
	ApiConnector.addMoney(data,response =>{
		if (response.success){
			ProfileWidget.showProfile(response.data);
			moneyManager.setMessage(false, 'Пополнение прошло успешно');
		} else{
			moneyManager.setMessage(true, "Ошибка, данные введены некорректно");
		}
	});
}	
//конвертирование валюты
moneyManager.conversionMoneyCallback = function(data){
	ApiConnector.convertMoney(data, response=>{
		if (response.success){
			ProfileWidget.showProfile(response.data);
			moneyManager.setMessage(false, 'Конвертация прошла успешно');
		} else{
			moneyManager.setMessage(true, "Ошибка, данные введены некорректно");
		}
	});
}

//перевод валюты
moneyManager.sendMoneyCallback = function (data){
	ApiConnector.transferMoney(data, response=>{
		if (response.success){
			ProfileWidget.showProfile(response.data);
			moneyManager.setMessage(false, 'Перевод прошел успешно');
		} else{
			moneyManager.setMessage(true, "Ошибка, данные введены некорректно");
		}
	});
}

//Работа с избранным
const favoritesWidget = new FavoritesWidget();
//Запросите начальный список избранного
ApiConnector.getFavorites(response=>{
  if(response.success){
  	favoritesWidget.clearTable();
  	favoritesWidget.fillTable(response.data);
  	moneyManager.updateUsersList(response.data);
  }
});

//Реализуйте добавления пользователя в список избранных
favoritesWidget.addUserCallback = function(data){
	ApiConnector.addUserToFavorites(data, response => {
        if(response.success){
  	       favoritesWidget.clearTable();
  	       favoritesWidget.fillTable(response.data);
  	       moneyManager.updateUsersList(response.data);
  	       favoritesWidget.setMessage(false, 'Пользователь успешно добавлен');
        } else {
           favoritesWidget.setMessage(true, "Ошибка, данные введены некорректно");
        }
	});
}

//Реализуйте удаление пользователя из избранного
favoritesWidget.removeUserCallback = function(data){
	ApiConnector.removeUserFromFavorites(data, response => {
        if(response.success){
  	       favoritesWidget.clearTable();
  	       favoritesWidget.fillTable(response.data);
  	       moneyManager.updateUsersList(response.data);
  	       favoritesWidget.setMessage(false, 'Пользователь успешно удален');
        } else {
           favoritesWidget.setMessage(true, "Ошибка, данные введены некорректно");
        }
	});
}










