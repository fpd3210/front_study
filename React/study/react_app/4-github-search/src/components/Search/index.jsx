import React, {Component} from 'react';


import axios from "axios";

class Search extends Component {


    /*
    package中加： "proxy":"http://localhost:5000" 删除setProxy
    */

    search = ()=>{
        // 获取用户的输入
        //const {value} = this.keyWordElement
        //连续结构赋值
        const {keyWordElement:{value:keyWord}} = this
        // 发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        //发送网络请求

        axios.get(`/api/search/users?q=${keyWord}`).then(
            response=>{
                this.props.updateAppState({isLoading: false,users: response.data.items})
            },
            error=>{
                this.props.updateAppState({isLoading: false,err:error.message})
            }
        )

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;
