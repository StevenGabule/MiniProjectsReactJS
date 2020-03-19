import React, {Component} from "react";

class TimerForm extends Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
            return (
                <div className='ui centered card'>
                    <div className="content">
                        <div className="ui form">
                            <div className="field">
                                <label htmlFor="title">Title</label>
                                <input type="text" id='title' defaultValue={this.props.title}/>
                            </div>
                            <div className="field">
                                <label htmlFor="description">Project</label>
                                <input type="text" id='description' defaultValue={this.props.project}/>
                            </div>
                            <div className="ui two bottom attached buttons">
                                <button className="ui basic blue button">
                                    {submitText}
                                </button>
                                <div className="ui basic red button">
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default TimerForm;