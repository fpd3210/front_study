(function () {
    //配置
    requirejs.config({
        //基本路径
        baseUrl:"js/", //出发点在根目录下
        //配置路径
        paths:{
          alerter:"modules/alerter",
            dataService :"modules/dataService",
            jquery:'libs/jquery-1.10.1',   //模块名必须写小写
            angular:'libs/angular'
        },
        shim:{  //angular不支持AMD所以需要其他配置
            angular: {
                exports:'angular'
            }
        }
    })

    //引入使用模块
    requirejs(['alerter'],function (alerter) {
        console.log(alerter.showMsg())
        console.log(angular)
    })
})()