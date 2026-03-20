export const UPI_ID = "motisain536-1@oksbi";
export const PAYEE_NAME = "Anand";

export const getUpiLink = (amount: number) =>
  `upi://pay?pa=${UPI_ID}&pn=${PAYEE_NAME}&am=${amount}&cu=INR`;

export const getGPayLink = (amount: number) =>
  `tez://upi/pay?pa=${UPI_ID}&pn=${PAYEE_NAME}&am=${amount}&cu=INR`;

export const getPhonePeLink = (amount: number) =>
  `phonepe://pay?pa=${UPI_ID}&pn=${PAYEE_NAME}&am=${amount}&cu=INR`;

export const getPaytmLink = (amount: number) =>
  `paytmmp://pay?pa=${UPI_ID}&pn=${PAYEE_NAME}&am=${amount}&cu=INR`;
