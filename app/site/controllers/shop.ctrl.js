(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl)

	function ShopCtrl($scope,productSrv,products,$state,cartSrv){
		var shopVm = this;

		//TODO #3 Capture resolved products for view
		shopVm.products=productSrv.products;
<<<<<<< HEAD

		////////////////
=======
		console.log(shopVm.products);
>>>>>>> origin/master
		shopVm.singleproduct = {};
		shopVm.category ='';
		shopVm.go = function(productId) {

			console.log(productId);
			$state.go('details',{id: productId});
			// $state.go('admin');
		};		

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

		

		shopVm.openCart = function(){
			cartSrv.open();
		}

		shopVm.addCart = function(product){

			cartSrv.addProduct(product);

		}

		



	}

})();


