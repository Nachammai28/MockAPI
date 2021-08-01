const apiBaseUrl = "https://nachammai.free.beeceptor.com";

function getUsers(){
	const endpoint = "/users";
  
	axios.get(`${apiBaseUrl}${endpoint}`).then(response=>{
  	const users = response.data.data;
  	console.log(users);
  });	
}


function addUser(){
const endpoint = "/user";
	axios.post(`${apiBaseUrl}${endpoint}`, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


getUsers();
addUser();