(function(){
    
    angular
        .module('shopApp')
        .service('cartSrv', cartService)

        function cartService($uibModal,$state){
        	var self = this;

        	self.items = [];
            self.addProduct=addProduct;

        	function addProduct(product){
            self.items.push(product)
        	}

            

        	//Display Items In Cart
        	// cart controller:
        		//ctrl.cart = cartSrv.items
        		//connect controller cart to cart service

        	// Cart.HTML
        	// ng-repeat = "item in ctrl.cart"
        		//display controller cart in html


        	
        	//Adding Product to Cart
        	//main product page HTML
        	//ng-repeat= "item in ctrl.products"
        			// display each item on the page

        	//ng-click= "ctrl.addProduct(item)"
        			// when button clicked, add that specific item to cart

        	// Must be repeated for both Main Shop Page / Shop Controller
        	// and Details Page // Details Controller


        	self.open = function (size) {
        		console.log('Opening modal');
        		var modalInstance = $uibModal.open({
			      animation: false,
			      templateUrl: 'site/partials/cart.html',
			      controller: 'ModalInstanceCtrl as ctrl',
			      size: size,
			      resolve: {
			        items: function () {
			          return self.items;
			        }
		      }
		    });

		    modalInstance.result.then(function () {
		      console.log('clicked okay');
		    }, function () {
		      console.log('Modal dismissed at: ' + new Date());
		    });
		  };
        }
})();
		