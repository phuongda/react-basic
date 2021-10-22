import React from 'react';

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
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
        console.log('Check prop:', this.props);
        // let name = this.props.name;
        // let age = this.props.age;

        let { name, age } = this.props;
        return (
            <>
                <div>My name is {name}, i'm {age}</div>
            </>
        )
    }
}

export default ChildComponent;