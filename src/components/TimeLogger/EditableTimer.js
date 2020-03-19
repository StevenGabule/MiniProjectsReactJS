import React, {Component} from "react";
import TimerForm from "./TimerForm";
import propTypes from "prop-types";
import Timer from "./Timer";

class EditableTimer extends Component {
    render() {
        const {title, project, elapsed, runningSince, edit} = this.props;

        if (edit) {
            return (
                <TimerForm title={title} project={project}/>
            )
        } else {
            return (
                <Timer
                    title={title}
                    project={project}
                    elapsed={elapsed}
                    runningSince={runningSince}
                />
            )
        }
    }
}

EditableTimer.propTypes = {
    edit: propTypes.bool
};

export default EditableTimer;