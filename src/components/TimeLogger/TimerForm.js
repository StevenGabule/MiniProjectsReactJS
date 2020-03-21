import React, {Component} from "react";

class TimerForm extends Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
        submitText: this.props.id ? 'Update' : 'Create'
    };

    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    };

    handleProjectChange = (e) => {
        this.setState({project: e.target.value})
    };

    handleSubmit = (e) => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        });
    };

    render() {
        const {title, project, submitText} = this.state;
        return (
            <div className='ui centered card'>
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id='title' value={title} name='title' onChange={this.handleTitleChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="description">Project</label>
                            <input type="text" id='project' name='project' value={project}  onChange={this.handleProjectChange}/>
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className="ui basic blue button" onClick={this.handleSubmit}>
                                {submitText}
                            </button>
                            <div className="ui basic red button" onClick={this.props.onFormClose}>
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