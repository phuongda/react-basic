import React from "react";
import axios from "axios";
import './ListUser.scss';

class ListUser extends React.Component {
    state = {
        ListUsers: []
    }

    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=2')
    //         .then(response => {
    //             console.log(response.data.data);
    //         })
    // }

    async componentDidMount() {
        let response = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            ListUsers: response && response.data && response.data.data ? response.data.data : []
        })
    }

    render() {
        let { ListUsers } = this.state
        return (
            <div className="list-user-container">
                <div className="title">List Users</div>
                {
                    ListUsers && ListUsers.length > 0 &&
                    <div className="list-user-content">
                        {
                            ListUsers.map((user, index) => {
                                return (
                                    <div className="child" key={user.id}>{user.id} - {user.last_name} {user.first_name}</div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default ListUser;