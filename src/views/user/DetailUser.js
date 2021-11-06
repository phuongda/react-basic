import React from "react";
import { withRouter } from "react-router";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let response = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: response && response.data && response.data.data ? response.data.data : []
            })
        }
    }

    handleBack = () => {
        this.props.history.push(`/user`);
    }

    render() {
        let { user } = this.state;
        let isEmptyObject = Object.keys(user).length === 0;

        return (
            <>
                <div>Detail User {this.props.match.params.id}</div>
                {
                    isEmptyObject === false &&
                    <>
                        <div>User name: {user.first_name} {user.last_name}</div>
                        <div>User email: {user.email}</div>
                        <div><img src={user.avatar} alt={user.id} /></div>
                        <div><button onClick={() => this.handleBack()}>Back</button></div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);