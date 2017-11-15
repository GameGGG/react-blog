import React, { Component } from 'react'
import './index.css'
class List extends Component {
    render() {
        return (
            <div className="list">
                <h3 className="list-head_title">
                    { this.props.data.title }
                    <span className="list-head_time">
                        { this.props.data.time }
                    </span>
                </h3>
                <div className="list-content">
                    { this.props.data.content }
                </div>
            </div>
        )
    }

}

export default List
