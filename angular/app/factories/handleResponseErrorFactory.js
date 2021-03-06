(function(){
   angular.module('primeiraApp').factory('handleResponseError', [
      '$q',
      '$window',
      'consts',
      HandleResponseError
   ])

   function HandleResponseError($q, $window, consts){
      
      function responseError(errorResponse){
         if(errorResponse.status == 403){
            localStorage.removeItem(consts.userKey)
            $window.location.href ='/'
         }
         return $q.reject(errorResponse)
      }

      return { responseError }
   }
})()