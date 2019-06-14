//initial state
//switch statement:
//get started = ...state (loading: true)
//succeeded = ...state, loading: false, events: action.payload
//failed = ...initialstate, isloading: false, error: true

const initialState = {
    applicants: [],
    loading: false,
    error:false
    // cohortDetails: []
    // button: 'gender'
};

const apiReducer = (state = initialState, action) => {
  console.log('apiReducer', state)
    switch (action.type) {
      case 'START_APPLICANT_CALL':
        return {
          ...state,
          loading: true
        };
      case 'APPLICANT_CALL_SUCCESSFUL':
        return {
          ...state,
          loading: false,
          applicants: action.payload
        };

      case 'APPLICANT_CALL_FAILED':
        return {
          ...initialState,
          loading: false,
          error: true
        };
      default:
        return state;
    }
};

export default apiReducer;

