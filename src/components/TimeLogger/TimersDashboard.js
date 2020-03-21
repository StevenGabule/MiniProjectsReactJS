import React, {Component} from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import {v4 as uuidv4} from 'uuid'

class TimersDashboard extends Component {
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuidv4(),
                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuidv4,
                elapsed: 1273998,
                runningSince: null,
            }
        ],
    };

    handleCreateFormSubmit = timer => {
        this.createTimer(timer);
    };


    handleEditFormSubmit = attrs => {
        this.updateTimer(attrs);
    };

    createTimer = timer => {
        // eslint-disable-next-line no-undef
        const t = helpers.newTimer(timer);
        this.setState({timers: this.state.timers.concat(t)});
    };

    updateTimer = attrs => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project
                    });
                } else {
                    return timer;
                }
            })
        })
    };

    handleTrashClick= (timerId) => {
        this.deleteTimer(timerId)
    };

    deleteTimer = timerId => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        })
    };

    render() {
        return (
            <div className={'ui three column centered grid'}>
                <div className="column">
                    <EditableTimerList
                        timers={this.state.timers}
                        onFormSubmit={this.handleEditFormSubmit}
                        onTrashClick={this.handleTrashClick}
                    />
                    <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit}/>
                </div>
            </div>
        )
    }

}

export default TimersDashboard;