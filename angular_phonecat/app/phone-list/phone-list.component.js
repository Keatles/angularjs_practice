/**
 * Created by kee on 2016-07-18.
 */

//定义'PhoneList'组件，以及相关控制器以及模板

angular.
module('phoneList').
component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';

        $http.get('phones/phones.json').then(function(response) {
            self.phones = response.data;
        });
    }
});