import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

class Header extends Component {

    //对接收的props进行：类型、必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        // 解构赋值获取keyCode,target
        const {keyCode,target} = event
        // 判断是否回车键
        if (keyCode!==13) return
        // 添加的todo名字不能为空
        if(target.value.trim()===''){
            alert('输入不能为空')
            return
        }

        // 准备好一个todoObj传递给App
        const todoObj = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        // 清空输入
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}

export default Header;
