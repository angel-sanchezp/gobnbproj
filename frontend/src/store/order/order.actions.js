import { orderService } from '../../services/order.service.js'
import Swal from "sweetalert2";




export function addOrder(order) {

    return async (dispatch) => {
        console.log("order action ", order);
        try {
            await orderService.addOrder(order)
            const action = { type: 'ADD_ORDER', order };
            dispatch(action);
            Swal.fire({
                position: 'top-end',
                title: "Thank you!",
                text: "Successfully reserved stay.",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 1500
              }).then(function () {
                window.location = "/trips";
              });
        } catch (err) {
            Swal.fire({
                title: "Oh no!",
                text: "Could not reserve stay",
                type: "error",
                icon: "error",
              }).then(function () {
                window.location = "/explore";
              });
            console.log('Cannot add order', err);
        }
    }
}

