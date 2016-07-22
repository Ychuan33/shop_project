(function(){
  angular
    .module('shopApp')
    .controller('ViewCtrl',ViewCtrl)

  function ViewCtrl(cartSrv) {
    var viewVm = this;
	viewVm.items = cartSrv.items;

}
}
)();