//initial state
//switch statement:
//get started = ...state (loading: true)
//succeeded = ...state, loading: false, events: action.payload
//failed = ...initialstate, isloading: false, error: true


const initialState = {
    results: [],
    loading: true,
    error:false
    // button: 'gender'
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_API_CALL':
            return {
                ...state
            };
        case 'API_CALL_SUCCESSFUL':
            return {
                ...state,
                loading: false,
                results: action.payload
            };
        case 'API_CALL_FAILED':
            return {
                ...initialState,
                loading: false,
                error: true
            };
        default:
            return initialState;
    }
};

export default apiReducer;

