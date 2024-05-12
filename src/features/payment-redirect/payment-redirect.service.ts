// import { load } from '@cashfreepayments/cashfree-js';

// export default async function paymentCheckOut(sessionID) {
//   const cashfree = await load({
//     mode: process.env.REACT_APP_CASH_FREE_ENV,
//   });
//   const checkoutOptions = {
//     paymentSessionId: sessionID,
//     redirectTarget: '_self',
//   };
//   cashfree.checkout(checkoutOptions);
// }

// import customAxios from '../../libs/https.util';

// export function createOrder(data) {
//   return customAxios.post('/payment/initiate', data);
// }

// export function getTrekRequestDetail(trekRequestId) {
//   return customAxios.get(`/trek-request/${trekRequestId}`);
// }

// export function verifyPayment(oredrId) {
//   return customAxios.post('/payment/verify/', { order_id: oredrId });
// }

// export function retryPayment(oredrId) {
//   return customAxios.post('/payment/retry/', { order_id: oredrId });
// }
