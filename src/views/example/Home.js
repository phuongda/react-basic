import React from 'react';
// import { withRouter } from "react-router";
import Color from '../hoc/Color';
import myPic from '../../assets/images/my-pic.png';

class Home extends React.Component {
    componentDidMount() {
        //     setTimeout(() => {
        //         this.props.history.push('/todo')
        //     }, 3000)
    }

    render() {
        console.log('Check props:', this.props);
        return (
            <>
                <div><img src={myPic} alt="my pic" width="300" style={{ marginTop: '15px' }} /></div>
                <div>
                    Hello this is Home Page
                </div>
            </>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);