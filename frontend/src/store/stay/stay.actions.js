import _ from "lodash";
import { stayService } from "../../services/stay.services.js";

export  function loadStays(predefinedFilterBy) {
    return (dispatch , getState) => {
        const filterBy = _.merge(getState().stayModule.filterBy, predefinedFilterBy);
        console.log(filterBy)
        stayService.query(filterBy)
            .then(stays => {
                console.log('stays from DB:', stays)
                dispatch({
                    type: 'SET_STAYS',stays
                })
            })
            .catch(err => {
                console.log('Cannot load stays', err)
            })
    }
}

export function onRemoveStay(stayId) {
    return (dispatch, getState) => {
        stayService.remove(stayId)
            .then(() => {
                console.log('Deleted Succesfully!');
                dispatch({
                    type: 'REMOVE_STAY',
                    stayId
                })
            })
            .catch(err => {
                console.log('Cannot remove stay', err)
            })
    }
}

export function onAddStay() {
    return (dispatch) => {
        const stay = stayService.getEmptyStay();
        stayService.save(stay)
            .then(savedStay => {
                console.log('Added Stay', savedStay);
                dispatch({
                    type: 'ADD_STAY',
                    stay: savedStay
                })
            })
            .catch(err => {
                console.log('Cannot add stay', err)
            })
    }
}

export function setFilter(filterBy) {
    console.log('actions',filterBy)
    return (dispatch) => {
        const action = { type: 'SET_FILTER', filterBy };
        dispatch(action);
    };
}

export function changeHeaderClass(newClass) {
        return (dispatch) => {
            const action = { type: 'SET_CLASS_HEADER', newClass };
            dispatch(action);
    }
}
export function changeFilter(isMinFilter) {
        return (dispatch) => {
            const action = { type: 'SET_MIN_FILTER', isMinFilter };
            dispatch(action);
    }
}



