const initialState = [
    {
        id:0,
        name:"Priya",
        number:9164849582,
        email:"Priya@gmail.com"
    },
    {
        id:1,
        name:"Darshini",
        number:4262315159,
        email:"darshini@gmail.com",
    }
];


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Create":
            state = [...state, action.payload]
            return state;

        case "Edit":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;

        case "Delete":
            const deleteState = state.filter((contact) => {
                return contact.id !== action.payload
            })
            state = deleteState;
            return state;

        default:
            return state;
    }
}

export default Reducer;