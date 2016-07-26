(function(){
	angular
		.module('shopApp')
<<<<<<< Updated upstream
		.controller('CheckoutCtrl',CheckoutCtrl)

	function CheckoutCtrl($scope,$state,productSrv,cartSrv){
		var checkVm = this;

		checkVm.items = cartSrv.items;
		checkVm.getTotal = getTotal;
		checkVm.Total = checkVm.getTotal() ;
		checkVm.totalAfterTax=checkVm.Total*1.13;

	 	function getTotal() {
	 		var totalCost = 0;
	 		for  (var i=0; i<checkVm.items.length; i++){
	 			totalCost += checkVm.items[i].price 
			
	 		}
	 		return totalCost;
	 	
		}
	}


})();
=======
		.controller('CheckoutCtrl',CheckoutCtrl);

function CheckoutCtrl($scope,$state,items,cartSrv){

	var checkVm=this;





}
})();

// 		function CheckoutCtrl(){

// 		}
	
// ();
>>>>>>> Stashed changes
