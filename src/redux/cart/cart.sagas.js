import { call, all, put, takeLatest } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

const { SIGN_OUT_SUCCESS } = UserActionTypes;

export function* clearCartOnSignOut() {
  try {
    yield put(clearCart());
  } catch (error) {}
}

export function* onUserSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onUserSignOutSuccess)]);
}
