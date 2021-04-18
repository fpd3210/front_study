/**
 * 使用module.exports = value向外暴露一个对象
 */

module.exports = {
    foo(){
        console.log('module1 foo()');
    }
}

//只能暴露一个，如果多个会把前面的覆盖
module.exports = {
    foo(){
        console.log('module1 foo2()');
    }
}