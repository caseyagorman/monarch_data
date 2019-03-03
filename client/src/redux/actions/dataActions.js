import * as types from "./actionTypes";
function getDataApi(user) {
  return "http://localhost:5000/api/second_grade_ela";
}

export function receiveData(data) {
  return { type: types.RECEIVE_DATA, data: data };
}

export function fetchData(user) {
  return dispatch => {
    return fetch(getDataApi(user), {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user
      }
    })
      .then(response => response.json())
      .then(data => dispatch(receiveData(data)));
  };
}
