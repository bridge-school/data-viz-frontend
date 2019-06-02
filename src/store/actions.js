//START_API_CALL in app.js
//API_CALL_SUCCESSFUL with payload
//API_CALL_FAILED, called under .catch in fetch



export const startAPI = () => ({
    type: 'START_API_CALL'
});

export const apiSuccessful = payload => ({
    type: 'API_CALL_SUCCESSFUL',
    payload
});

export const apiFailed = () => ({
    type: 'API_CALL_FAILED'
});

//TODO: change CORS on back end & change api source

//fetchData works! passed dummy fetch to check pushing to state
export const fetchData = () => {
    return (dispatch) => {
        dispatch(startAPI());
        // fetch(`http://data-viz-backend.bridgeschoolapp.io/cohorts`)
        fetch('https://api.github.com/users/bridge-school')
            .then(res => !res.ok ? Promise.reject('Something went wrong :(') : res.json())
            .then(data => {
                dispatch(apiSuccessful(data));
            })
            .catch(() => dispatch(apiFailed()));
    };
};

