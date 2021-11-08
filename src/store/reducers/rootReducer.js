const initSate = {
    users: [
        { id: 1, name: 'Phương' },
        { id: 2, name: 'Tân' }
    ],
    posts: []
}

const rootReducer = (state = initSate, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('DELETE_USER:', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return { ...state, users };
        case 'CREATE_USER':
            // console.log('DELETE_USER:', action);
            let id = Math.floor(Math.random() * 10000);
            let user = {
                id: id,
                name: `random - ${id}`
            };
            return { ...state, users: [...state.users, user] };
        default:
            return state;
    }
}

export default rootReducer;