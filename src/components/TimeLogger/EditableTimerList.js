import React, {Component} from "react";
import EditableTimer from "./EditableTimer";

class EditableTimerList extends Component {
    render() {
        const {timers, onFormSubmit,onTrashClick} = this.props;
        const timer = timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={onFormSubmit}
                onTrashClick={onTrashClick}
                onStartClick={this.props.onStartClick}
                onStopClick={this.props.onStopClick}
            />
        ));

        return (
            <div id='timers'>
                {timer}
            </div>
        )
    }
}

export default EditableTimerList;
