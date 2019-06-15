export const startApplicantAPI = () => ({
  type: 'START_APPLICANT_CALL'
});

export const applicantSuccessful = payload => ({
  type: 'APPLICANT_CALL_SUCCESSFUL',
  payload
});

export const applicantAPIFailed = () => ({
  type: 'APPLICANT_CALL_FAILED'
});

export const apiFailed = () => ({
  type: 'API_CALL_FAILED'
});

export const fetchData = () => {
  return dispatch => {
    dispatch(startApplicantAPI());
    fetch(`http://data-viz-backend.bridgeschoolapp.io/application`)
      .then(res =>
        !res.ok ? Promise.reject('Something went wrong :(') : res.json()
      )
      .then(data => {
        dispatch(applicantSuccessful(data));
      })
      .catch(() => dispatch(applicantAPIFailed()));
  };
};








export const startCohortAPI = () => ({
  type: 'START_COHORT_CALL'
});

export const cohortsSuccessful = payload => ({
  type: 'COHORT_CALL_SUCCESSFUL',
  payload
});

export const cohortAPIFailed = () => ({
  type: 'COHORT_CALL_FAILED'
});

export const fetchCohort = id => {
  return dispatch => {
    dispatch(startCohortAPI());
    fetch(`http://data-viz-backend.bridgeschoolapp.io/cohorts/${id}`)
      .then(res =>
        !res.ok ? Promise.reject('Something went wrong :(') : res.json()
      )
      .then(data => {
        dispatch(cohortsSuccessful(data));
      })
      .catch(() => dispatch(cohortAPIFailed()));

  };
};
