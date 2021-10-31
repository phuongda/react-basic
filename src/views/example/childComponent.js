import React from 'react';
import './demo.scss';

class ChildComponent extends React.Component {
    state = {
        'showJob': true
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteJob(job);
    }

    render() {

        let { jobs } = this.props;
        let { showJob } = this.state;

        return (
            <>
                {!showJob ?
                    <div><button className="btn-show" onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>{item.title} - {item.salary}&nbsp;<span onClick={() => this.handleOnClickDelete(item)}>x</span></div>
                                    )
                                })
                            }
                        </div>
                        <div><button style={{ color: 'red' }} onClick={() => this.handleShowHide()}>hide</button></div>
                    </>
                }
            </>
        )
    }
}

/*const ChildComponent = (props) => {
    console.log('Check props:', props)
 
    let { jobs } = props;
 
    return (
        <>
            <div className="job-lists">
                {
                    jobs.map((item, index) => {
                        if (item.salary >= 500) {
                            return (
                                <div key={item.id}>{item.title} - {item.salary}$</div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
} */

export default ChildComponent;