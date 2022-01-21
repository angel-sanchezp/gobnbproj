import _ from "lodash";
import { stayService } from "../../services/stay.services.js";

export function loadStays(predefinedFilterBy) {
    return (dispatch , getState) => {
        const filterBy = _.merge(getState().stayModule.filterBy, predefinedFilterBy);
        console.log(filterBy)
        stayService.query(filterBy)
            .then(stays => {
                // console.log('stays from DB:', stays)
                dispatch({
                    type: 'SET_STAYS',stays})
            })
            .catch(err => {
                // showErrorMsg('Cannot load stays')
                console.log('Cannot load stays', err)
            })

        // stayService.subscribe((stays) => {
        //     console.log('Got notified');
        //     dispatch({
        //         type: 'SET_STAYS',
        //         stays
        //     })
        // })
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
                // showSuccessMsg('Stay removed')
            })
            .catch(err => {
                // showErrorMsg('Cannot remove stay')
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
                // showSuccessMsg('Stay added')
            })
            .catch(err => {
                // showErrorMsg('Cannot add stay')
                console.log('Cannot add stay', err)
            })
    }
}

export function setFilter(filterBy) {
    console.log(filterBy)
    return (dispatch) => {
        const action = { type: 'SET_FILTER', filterBy };
        dispatch(action);
    };
}

export function changeHeaderClass(newClass) {
        return (dispatch) => {
            // var newClass = classHeader.toString()
            console.log(newClass)
            const action = { type: 'SET_CLASS_HEADER', newClass };
            dispatch(action);
    }
}
export function changeFilter(isMinFilter) {
        return (dispatch) => {
            console.log(isMinFilter)
            const action = { type: 'SET_MIN_FILTER', isMinFilter };
            dispatch(action);
    }
}

// export function onEditStay(stayToSave) {
//     return (dispatch) => {
//         stayService.save(stayToSave)
//             .then(savedStay => {
//                 console.log('Updated Stay:', savedStay);
//                 dispatch({
//                     type: 'UPDATE_STAY',
//                     stay: savedStay
//                 })
//                 showSuccessMsg('Stay updated')
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot update stay')
//                 console.log('Cannot save stay', err)
//             })
//     }
// }

// export function addToStayt(stay) {
//     return (dispatch) => {
//         dispatch({
//             type: 'ADD_TO_STAY',
//             stay
//         })
//     }
// }


// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
// export function onRemoveStayOptimistic(stayId) {

//     return (dispatch, getState) => {

//         dispatch({
//             type: 'REMOVE_STAY',
//             stayId
//         })
//         showSuccessMsg('Stay removed')

//         stayService.remove(stayId)
//             .then(() => {
//                 console.log('Server Reported - Deleted Succesfully');
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot remove stay')
//                 console.log('Cannot load stays', err)
//                 dispatch({
//                     type: 'UNDO_REMOVE_STAY',
//                 })
//             })
//     }
// }