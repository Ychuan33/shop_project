(function(){
	angular
		.module('shopApp')
		.controller('DetailsCtrl',DetailsCtrl)
    function DetailsCtrl($scope,productSrv,$state,products,cartSrv){
        var detailsVm = this;

        detailsVm.details = products.data;

        console.log(detailsVm.details);

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
})();