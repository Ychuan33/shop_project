(function(){
  angular
    .module('shopApp')
    .controller('ModalInstanceCtrl',ModalInstanceCtrl)

  function ModalInstanceCtrl($scope, $uibModalInstance, items, cartSrv) {
    var modalVm = this;

    modalVm.items = cartSrv.items;

    modalVm.ok = function () { // checkout function
      $uibModalInstance.close();
    };

    modalVm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

})();