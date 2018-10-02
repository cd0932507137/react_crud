import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    // constructor習慣上寫在class裡面的第一個function位置
    constructor(props) {
        super(props);
        this._renderItems = this._renderItems.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Todo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this._renderItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    // 通常非內建function可以做一點區別會比較好閱讀，我這邊是寫在所有內建function最下面(通常是render後面)，並且名稱加上底線
    _renderItems() {
        const { todos, saveTask, deleteTask } = this.props;

        let list = [];
        todos.forEach((todo, idx) => {
            list.push(
                <TodoItem key={idx} idx={idx} todo={todo} saveTask={saveTask} deleteTask={deleteTask} />);
        });
        return list;
    }
}

export default TodoList;
