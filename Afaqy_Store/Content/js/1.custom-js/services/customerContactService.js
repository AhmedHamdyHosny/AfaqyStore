﻿function customerContactService() {

    var customerContactList = [];
    var init = function () {
        customerContactList = [];
    }
    

    var add = function (contact) {
        if (contact != null) {
            customerContactList.push(contact);
        }
    };

    var get = function () {
        return customerContactList;
    };

    var getByIndex = function (index) {
        return customerContactList[index];
    };

    var clear = function () {
        customerContactList = [];
    };

    return {
        init: init,
        add: add,
        get: get,
        clear: clear
    };
}