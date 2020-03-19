import React, {Component} from "react";
import EditableTimer from "./EditableTimer";

class EditableTimerList extends Component {
    render() {
        return (
            <div id='timers'>

                <EditableTimer
                    title='Learn react'
                    project='Web Domination'
                    elapsed='8986300'
                    runningSince='null'
                    edit={false} />

                <EditableTimer
                    title='Learn extreme ironing'
                    project='World Domination'
                    elapsed='3890985'
                    runningSince={null}
                    edit={true} />

            </div>
        )
    }
}

export default EditableTimerList;