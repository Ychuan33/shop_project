(function(){
  angular
    .module('shopApp')
    .controller('ModalInstanceCtrl',ModalInstanceCtrl)

  function ModalInstanceCtrl($scope, $uibModalInstance, items) {
    var modalVm = this;

    modalVm.ok = function () { // checkout function
      $uibModalInstance.close();
    };

    modalVm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

})();