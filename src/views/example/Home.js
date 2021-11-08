import React from 'react';
// import { withRouter } from "react-router";
import Color from '../hoc/Color';
import myPic from '../../assets/images/my-pic.png';
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        //     setTimeout(() => {
        //         this.props.history.push('/todo')
        //     }, 3000)
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
        console.log(this.props);
    }

    handleCreatUser = () => {
        this.props.addUserRedux()
    }

    render() {
        console.log('Check props:', this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div><img src={myPic} alt="my pic" width="200" style={{ marginTop: '15px' }} /></div>
                <div>
                    Hello this is Home Page
                </div>
                <div>
                    {
                        listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreatUser()}>Add User</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDisPatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDisPatchToProps)(Color(Home));