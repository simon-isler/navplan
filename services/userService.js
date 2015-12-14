/**
 * User Service
 */

navplanApp
	.factory('userService', userService);

userService.$inject = ['$http'];

function userService($http)
{
	var api = 
	{
		login: login,
		register: register,
		readNavplanList: readNavplanList,
		readNavplan: readNavplan,
		createNavplan: createNavplan,
		updateNavplan: updateNavplan,
		deleteNavplan: deleteNavplan
	}
	
	return api;

	
	function login(email, password)
	{
		return $http.post('php/users.php', obj2json({ action: 'login', email: email, password: password }));
	}

	
	function register(email, password)
	{
		return $http.post('php/users.php', obj2json({ action: 'register', email: email, password: password }));
	}
	
	
	function readUser(email, token)
	{
		//TODO
	}
	
	
	function readNavplanList(email, token)
	{
		return $http.post('php/navplan.php', obj2json({ action: 'readList', email: email, token: token }));
	}


	function readNavplan(navplan_id, email, token)
	{
		return $http.post('php/navplan.php', obj2json({ action: 'read', navplan_id: navplan_id, email: email, token: token }));
	}
	
	
	function createNavplan(globalData)
	{
		return $http.post('php/navplan.php', obj2json({ action: 'create', globalData: globalData }));
	}

	
	function updateNavplan(globalData)
	{
		return $http.post('php/navplan.php', obj2json({ action: 'update', globalData: globalData }));
	}


	function deleteNavplan(navplan_id, email, token)
	{
		return $http.post('php/navplan.php', obj2json({ action: 'delete', navplan_id: navplan_id, email: email, token: token }));
	}
}
