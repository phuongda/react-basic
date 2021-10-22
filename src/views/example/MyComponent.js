import React from 'react';
import ChildComponent from './childComponent';

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'job1', title: 'developer', salary: '500$' },
            { id: 'job2', title: 'tester', salary: '400$' },
            { id: 'job3', title: 'project manager', salary: '1000$' }
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Check data input:', this.state);
    }

    render() {
        console.log('Render:', this.state);

        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit" defaultValue="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>

                <ChildComponent name={this.state.firstName} age={27} address={'Ho Chi Minh'} jobs={this.state.arrJobs} />
            </>
        )
    }
}

export default MyComponent;