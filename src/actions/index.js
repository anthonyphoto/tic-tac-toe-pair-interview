import {API_BASE_URL} from '../config';

export const UPDATE_CELL = 'UPDATE_CELL';
export const updateCell = (index) => ({
    type: UPDATE_CELL,
    index
});


export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
    type: FETCH_REQUEST
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = err => ({
    type: FETCH_ERROR,
    err
})

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    data

});

export const fetchData = () => dispatch => {
    dispatch(fetchRequest());

    return fetch(`${API_BASE_URL}/`)
     .then(res => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                message: res.statusText
            });
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        dispatch(fetchDataSuccess(data));
    })
    .catch(err => dispatch(fetchError(err)));
}
