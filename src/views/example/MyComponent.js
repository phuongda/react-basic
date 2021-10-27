import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'job1', title: 'developer', salary: '500' },
            { id: 'job2', title: 'tester', salary: '400' },
            { id: 'job3', title: 'project manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('Check job from parent:', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent jobs={this.state.arrJobs} deleteJob={this.deleteJob} />
            </>
        )
    }
}

export default MyComponent;