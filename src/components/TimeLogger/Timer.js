import React, {Component} from 'react';
import TimerActionButton from "./TimerActionButton";

class Timer extends Component {

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id)
    };

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    };

    handleStartClick = () => {
        this.props.onStartClick(this.props.id)
    };

    handleStopClick = () => {
        this.props.onStopClick(this.props.id)
    };


    render() {
        // eslint-disable-next-line no-undef
        const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
        const {title, project, onEditClick} = this.props;

        return (
            <div className='ui centered card'>
                <div className="content">
                    <div className="header">
                        {title}
                    </div>
                    <div className="meta">
                        {project}
                    </div>
                    <div className="center aligned description">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={onEditClick}>
                            <i className='edit icon'/>
                        </span>
                        <span className="right floated trash icon" onClick={this.handleTrashClick}>
                            <i className='trash icon'/>
                        </span>
                    </div>
                </div>
                {/*
                <div className="ui bottom attached blue basic button">
                    Start
                </div>*/}

                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
            </div>
        )
    }
}

export default Timer;
