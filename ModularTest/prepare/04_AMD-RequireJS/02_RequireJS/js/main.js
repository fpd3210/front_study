(function () {
    //配置
    requirejs.config({
        //基本路径
        baseUrl:"js/", //出发点在根目录下
        //配置路径
        paths:{
          alerter:"modules/alerter",
            dataService :"modules/dataService"
        }
    })

    //引入使用模块
    requirejs(['alerter'],function (alerter) {
        console.log(alerter.showMsg())
    })
})()