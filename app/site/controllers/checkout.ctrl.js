(function(){
	angular
		.module('shopApp')
		.controller('CheckoutCtrl',CheckoutCtrl)

	function CheckoutCtrl($scope,$state,productSrv,cartSrv){
		var checkVm = this;

		checkVm.items = cartSrv.items;
		console.log (checkVm.items);
		checkVm.getTotal = getTotal;
		checkVm.Total = checkVm.getTotal() 

	 	function getTotal() {
	 		var totalCost = 0;
	 		for  (var i=0; i<checkVm.items.length; i++){
	 			totalCost += checkVm.items[i].price * checkVm.items[i].quantity
			
	 		}
	 		return totalCost;
	 	
		}
	}


})();