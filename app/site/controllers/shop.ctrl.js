(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl)

	function ShopCtrl($scope,$state,productSrv,products,cartSrv){
		var shopVm = this;

		//TODO #3 Capture resolved products for view
		shopVm.products=productSrv.products;
		console.log(shopVm.products);
		shopVm.singleproduct = {};
		shopVm.category = '';

		// productSrv.getProducts()
		// .then(function(data){
		// 	console.log(data)
		// })
		// .catch(function(err){
		// 	console.log(err)
			
		// })

		//watch for any changes to model data
		$scope.$watch(function(){
	    	return productSrv.products;
		}, function (newValue) {
		    shopVm.products = productSrv.products;
		});

		// $scope.$watch(
		// 	function(){
		// 		return productSrv.products;
		// 	}

		// 	function(newVal){
				
		// 	}

		// 	)

		shopVm.go = function(productId) {

			console.log(productId);
			$state.go('details',{id: productId});
			// $state.go('admin');
		};

		shopVm.openCart = function(){
			cartSrv.open();
		}

		shopVm.addCart = function(id){
			//run getProduct function from productSrv

			//take response and add to cart array in cartSrv
		shopVm.item = productSrv.getProduct(id);
		console.log(id);
		console.log(shopVm.item);
		cartSrv.addProduct(shopVm.item);


								


		}

		



	}

})();


