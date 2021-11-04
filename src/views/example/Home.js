import React from 'react';
// import { withRouter } from "react-router";
import Color from '../hoc/Color';

class Home extends React.Component {
    componentDidMount() {
        //     setTimeout(() => {
        //         this.props.history.push('/todo')
        //     }, 3000)
    }

    render() {
        console.log('Check props:', this.props);
        return (
            <div>
                Hello this is Home Page
            </div>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);