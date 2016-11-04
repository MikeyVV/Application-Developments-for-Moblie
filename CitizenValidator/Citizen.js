"use strict";
var Citizen;
(function (Citizen) {
    function isValidID(id) {
        var idString = id.split("");
        var idNumber = [];
        var idSum = 0;
        for (var i = 0, k = 13; i < idString.length - 1; i++, k--) {
            idNumber[i] = Number(idString[i]);
            idSum += idNumber[i] * k;
        }
        return Math.abs((11 - (idSum % 11)) % 10) === Number(idString[12]);
    }
    Citizen.isValidID = isValidID;
})(Citizen || (Citizen = {}));
module.exports = Citizen;
