import { stayService } from "../../services/stay.services.js";

export function loadStays() {
    return (dispatch) => {
        stayService.query()
            .then(stays => {
                console.log('stays from DB:', stays)
                dispatch({
                    type: 'SET_STAYS',
                    stays
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load stays')
                console.log('Cannot load stays', err)
            })

        stayService.subscribe((stays) => {
            console.log('Got notified');
            dispatch({
                type: 'SET_STAYS',
                stays
            })
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
                showSuccessMsg('Stay removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove stay')
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
                showSuccessMsg('Stay added')
            })
            .catch(err => {
                showErrorMsg('Cannot add stay')
                console.log('Cannot add stay', err)
            })
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