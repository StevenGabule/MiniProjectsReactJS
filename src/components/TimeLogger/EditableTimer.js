import React, {Component} from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class EditableTimer extends Component {
    state = {
        editFormOpen: false,
    };


    handleEditClick = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };

    handleSubmit = timer => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };

    closeForm = () => {
        this.setState({editFormOpen: false})
    };

    openForm = () => {
        this.setState({editFormOpen: true})
    };


    render() {
        const {editFormOpen} = this.state;
        const {title, project, elapsed, runningSince, id, onTrashClick} = this.props;

        if (editFormOpen) {
            return (
                <TimerForm
                    id={id}
                    title={title}
                    project={project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}/>
            )
        } else {
            return (
                <Timer
                    id={id}
                    title={title}
                    project={project}
                    elapsed={elapsed}
                    runningSince={runningSince}
                    onEditClick={this.handleEditClick}
                    onTrashClick={onTrashClick}
                    onStartClick={this.props.onStartClick}
                    onStopClick={this.props.onStopClick}
                />
            )
        }
    }
}

export default EditableTimer;
