(function(){
	angular
		.module('shopApp')
		.controller('DetailsCtrl',DetailsCtrl)
    function DetailsCtrl($scope,productSrv,$state,products,cartSrv){
        var detailsVm = this;

<<<<<<< Updated upstream
        detailsVm.details = products.data;
=======
	function DetailsCtrl($scope,productSrv,$state,products,cartSrv){
		var detailsVm = this;
>>>>>>> Stashed changes

        console.log(detailsVm.details);

<<<<<<< Updated upstream
    detailsVm.openCart = function(){
        cartSrv.open();
        }

        console.log("cart is open");

    detailsVm.addCart = function(product){
        console.log(product);
        cartSrv.addProduct(product);
        alert("ADDED");
        }
    }    
=======
		console.log(detailsVm.details);

	detailsVm.openCart = function(){
		cartSrv.open();
		}

		console.log("cart is open");

	detailsVm.addCart = function(product){
		console.log(product);
		cartSrv.addProduct(product);
		}
	}	
>>>>>>> Stashed changes
})();