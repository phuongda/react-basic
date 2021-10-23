import React from 'react';

class AddComponent extends React.Component {

    state = {
        titleJobs: '',
        salary: '',
    }

    handleChangeTitleJobs = (event) => {
        this.setState({
            titleJobs: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Check data input:', this.state);
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="ftitlejobs">Jobs Title:</label><br />
                    <input type="text" value={this.state.titleJobs} onChange={(event) => this.handleChangeTitleJobs(event)} /><br />
                    <label htmlFor="fsalary">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit" defaultValue="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default AddComponent;