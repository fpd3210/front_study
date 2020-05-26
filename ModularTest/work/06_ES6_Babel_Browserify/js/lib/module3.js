'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//默认暴露


function third1() {
    console.log('aaa()  module3');
}

function third2() {
    console.log('ccc() module3');
}

exports.default = {
    third1: third1, third2: third2
};