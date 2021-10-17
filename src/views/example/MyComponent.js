import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Won Su',
        age: 27
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <input type="test" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)}></input>
                <div className="box-children-1">Hello! My name is {this.state.name}, i'm {this.state['age']}</div>
                <div className="box-children-2">this is My Component</div>
            </>
        )
    }
}

export default MyComponent;