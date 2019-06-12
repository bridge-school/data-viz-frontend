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

export const cohortsSuccessful = payload => ({
  type: 'COHORT_CALL_SUCCESSFUL',
  payload
});

export const apiFailed = () => ({
  type: 'API_CALL_FAILED'
});

export const fetchData = () => {
  return dispatch => {
    dispatch(startAPI());
    fetch(`http://data-viz-backend.bridgeschoolapp.io/application`)
      .then(res =>
        !res.ok ? Promise.reject('Something went wrong :(') : res.json()
      )
      .then(data => {
        dispatch(apiSuccessful(data));
      })
      .catch(() => dispatch(apiFailed()));
  };
};

export const fetchCohort = id => {
  return dispatch => {
    dispatch(startAPI());
    fetch(`http://data-viz-backend.bridgeschoolapp.io/cohorts/${id}`)
      .then(res =>
        !res.ok ? Promise.reject('Something went wrong :(') : res.json()
      )
      .then(data => {
        dispatch(cohortsSuccessful(data));
      })
      .catch(() => dispatch(apiFailed()));

  };
};
