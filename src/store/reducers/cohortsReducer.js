//initial state
//switch statement:
//get started = ...state (loading: true)
//succeeded = ...state, loading: false, events: action.payload
//failed = ...initialstate, isloading: false, error: true

const initialState = {
    // applicants: [],
    cohortLoading: true,
    error: false,
    cohortDetails: []
    // button: 'gender'
};

const cohortsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_COHORT_CALL':
            return {
                ...state,
                cohortLoading: true
            };
        case 'COHORT_CALL_SUCCESSFUL':
            return {
                ...state,
                cohortLoading: false,
                cohortDetails: action.payload
            };
        case 'COHORT_CALL_FAILED':
            return {
                ...initialState,
                cohortLoading: false,
                error: true
            };
        default:
            return state;
    }
};

export default cohortsReducer;

