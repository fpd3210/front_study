import React, {Component} from 'react';
import axios from "axios";

import Search from "./components/Search";
import List from './components/List'
import './App.css'


class App extends Component {

    state = {
        users:[],
        isFirst:true, // 是否第一次打开页面
        isLoading:false, // 标识是否处于加载中
        err:''  // 存储请求相关的错误信息
    }

    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }

    show = ()=>{
        axios.get('/api1/users').then(

        )
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state} />


                <button onClick={this.show}>点击发送请求</button>
            </div>
        )
    }
}

export default App;
