import { actionTypes } from "./actionTypes";

export const addToCart = (dispatch, item) => dispatch ({ type: actionTypes.ADD_TO_CART, payload: item });

