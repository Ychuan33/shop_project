(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl)

	function ShopCtrl($scope,productSrv,products, cartSrv){
		var shopVm = this;

		//TODO #3 Capture resolved products for view
		shopVm.products = products;

		//watch for any changes to model data
		$scope.$watch(function(){
	    	return productSrv.products;
		}, function (newValue) {
		    shopVm.products = productSrv.products;
		});

		shopVm.openCart = function(){
			cartSrv.open();
		}
	}



	// $scope.$watch ()
// what youre watching
// function ( {
	// return productsSrv.products;
// },
// what to do when it changes
// function (newValue) {  (route forcing link)

})();


