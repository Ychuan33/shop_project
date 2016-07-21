(function(){
	angular
		.module('shopApp')
		.controller('DetailsCtrl',DetailsCtrl)

	function DetailsCtrl($scope,productSrv,$state,products){
		var detailsVm = this;

		detailsVm.details = products.data;

		console.log(detailsVm.details);

	}	


})();