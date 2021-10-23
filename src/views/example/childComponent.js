import React from 'react';

class ChildComponent extends React.Component {
    state = {
        'showJob': false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    render() {

        let { jobs } = this.props;
        let { showJob } = this.state;

        return (
            <>
                {!showJob ?
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>{item.title} - {item.salary}</div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>hide</button></div>
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