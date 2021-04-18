# React学习笔记

## React基础

### 1.React入门
虚拟dom(Diffing算法)，组件化编码，jsx(babel编译成js)

#### 相关js库
- react.js：React核心库。
- react-dom.js：提供操作DOM的react扩展库。
- babel.min.js：解析JSX语法代码转为JS代码的库

#### jsx语法
- 1.定义DOM时，不要写引号
- 2.标签中混入Js表达式时要用{}
- 3.样式的类名指定不要用class，要用className。
- 4.内联样式，要用style={{key:value}}
- 5.只有一个根标签
- 6.标签必须闭合
- 7.标签首字母
    - 1）若小写字母开头，则将该标签转换为html同名元素，若html中无该标签，则报错。
    - 2）若大写字母开头，react就去渲染对应的组件，若组件没有定义则报错。

### 2.三大组件
组件有两种方法，一种是函数式组件,另一种是类式组件
#### 2.1.state
state也叫状态机，通过更新state中的属性来更新对应页面(重新渲染组件)

#### 2.2.props
通过props从外部向组件内部传递数据
#### 2.3.refs
在组件中可以通过refs来标识自己(不用通过window.document.getXxx获取)

有三种方式：
- 字符串形式：`<xxx ref="name"/>`
- 回调形式：`<xxx ref={(currentNode)=>this.name=currentNode}`
- createRef：

#### 事件处理
- 1.通过onXxx属性指定事件处理函数(注意大小写)
    - a.React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性
    - b.React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效
- 2.通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref


#### 受控组件与非受控组件

- 非受控组件：通过添加ref现用现取
- 受控组件：通过添加onChange事件把更新维护到状态中（类比vue的双向绑定）

#### 高阶函数与函数的柯里化

高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。
- 1.若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
- 2.若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。
>常见的高阶函数有：Promise、setTimeout、arr.map()等等

函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。

### 3.组件的生命周期
组件从创建到死亡它会经历一些特定的阶段，不同的阶段有不同的钩子函数(生命周期回调函数)。

#### 旧的生命周期
初始化阶段: 由ReactDOM.render()触发---初次渲染
- constructor()
- componentWillMount()
- render()
- componentDidMount()

更新阶段: 由组件内部this.setSate()或父组件重新render触发
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

卸载组件: 由ReactDOM.unmountComponentAtNode()触发
- componentWillUnmount()

#### 新的生命周期
初始化阶段: 由ReactDOM.render()触发---初次渲染
- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

更新阶段: 由组件内部this.setSate()或父组件重新render触发
- getDerivedStateFromProps
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate
- componentDidUpdate()

卸载组件: 由ReactDOM.unmountComponentAtNode()触发
- componentWillUnmount()


#### 常用的几个方法
- render：初始化渲染或更新渲染调用
- componentDidMount：开启监听, 发送ajax请求
- componentWillUnmount：做一些收尾工作, 如: 清理定时器

### 4.Diffing算法
在React中比较虚拟DOM与真实DOM的key，如果
- key相同，比较内容，内容相同，直接使用之前的真实DOM，内容不同，生成新的真实DOM替换旧的虚拟DOM
- key不相同，生成新的虚拟DOM,替换掉原来虚拟DOM

> DOM中的key建议使用数据的唯一键

用index作为key可能会引发的问题：
- 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

- 如果结构中还包含输入类的DOM：
                会产生错误DOM更新 ==> 界面有问题。
                
- 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
    仅用于渲染列表用于展示，使用index作为key是没有问题的。

## React脚手架
1.全局安装
```shelll
npm i -g create-react-app
```
2.创建项目
```shell script
create-react-app project-name
```
3.进入项目所在文件夹
```shell script
cd project-name
```
4.启动项目
```shell script
npm start
```

教授叫目录结构
```html
.
├── README.md  
├── package.json  项目模块包的描述(node)
├── public  静态资源文件夹
│   ├── favicon.ico
│   ├── index.html          主页面
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src     源码文件夹
│   ├── App.css             App组件样式
│   ├── App.js              App组件
│   ├── App.test.js         用于给App做测试
│   ├── index.css           样式
│   ├── index.js            入口文件
│   ├── logo.svg            logo图
│   ├── reportWebVitals.js  页面性能分析文件
│   └── setupTests.js       组件单元测试文件
└── yarn.lock   项目模块包的描述(yarn)
```


### 配置代理
**第一种方式：**
在package.json文件中
```json
"proxy":"后端url"
```
**第二种方式:**
项目根目录添加`setProxy.js`文件
```js
const createProxyMiddleware = require('http-proxy-middleware')

module.exports = function(app){
	app.use(
		createProxyMiddleware('/api',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发给谁
			secure: false,
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api':''} //重写请求路径(必须)
		})
	)
}

```
