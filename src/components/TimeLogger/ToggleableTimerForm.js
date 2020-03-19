import React, {Component} from "react";
import TimerForm from "./TimerForm";

class ToggleableTimerForm extends Component {
    render() {
        if (this.props.isOpen) {
            return (
                <TimerForm />
            )
        } else {
            return (
                <div className='ul basic content center aligned segment' style={{textAlign: 'center', marginTop: '20px'}}>
                    <div className="ui basic button icon">
                        <i className="plus icon" />
                    </div>
                </div>
            )
        }
    }
}



export default ToggleableTimerForm;