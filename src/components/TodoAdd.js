import React, { Component } from 'react';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this._onAddClick = this._onAddClick.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="form-group form-inline">
                        <input className="form-control" type="text" ref="addInput" />
                        <button className="btn btn-success" onClick={this._onAddClick}>Create</button>
                    </div>
                </div>
            </div>
        );
    }

    _onAddClick() {
        const addInput = this.refs.addInput;

        this.props.addTask(addInput.value);
        addInput.value = '';
    }
}

export default TodoAdd;
