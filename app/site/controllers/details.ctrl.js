(function(){
	angular
		.module('shopApp')
		.controller('DetailsCtrl',DetailsCtrl)

	function DetailsCtrl(productSrv,$stateParams,api){
		var detailsVm = this;

		detailsVm.id = $stateParams.productId;
		detailsVm.product=productSrv.getProduct(detailsVm.id );


	}	


})();