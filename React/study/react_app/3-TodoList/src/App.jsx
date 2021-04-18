import React, {Component} from 'react';

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

class App extends Component {

    //初始化状态
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false},
        {id:'004',name:'逛街',done:false}
    ]}

    addTodo = (todoObj)=>{
        // 获取原todos
        const {todos} = this.state
        // 追加一个todo
        const newTodos = [todoObj,...todos]
        // 更新状态
        this.setState({todos: newTodos})
    }

    // updateTodo 用于更新一个todo对象
    updateTodo = (id,done)=>{
        // 获取状态中的todos
        const {todos} = this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id ===id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos: newTodos})
    }

    // deleteTodo用于删除一个todo对象
    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter(todoObj=>{
            return todoObj.id !==id
        })
        this.setState({todos: newTodos})
    }

    // checkAllTodo用于全选
    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map(todoObj=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }

    // clearAllDone 用于清除所有已完成的
    clearAllDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter(todoObj=>{
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}

export default App;
