import React from 'react';

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJobs = (event) => {
        this.setState({
            title: event.target.value
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

        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="ftitle">Jobs Title:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitleJobs(event)} /><br />
                    <label htmlFor="fsalary">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit" defaultValue="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default AddComponent;