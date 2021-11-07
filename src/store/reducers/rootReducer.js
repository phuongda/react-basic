const initSate = {
    users: [
        { id: 1, name: 'Phương' },
        { id: 2, name: 'Tân' }
    ]
}

const rootReducer = (state = initSate, action) => {
    return state;
}

export default rootReducer;