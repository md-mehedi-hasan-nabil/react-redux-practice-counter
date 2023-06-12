import { D_INCREMENT, D_DECREMENT } from './actionTypes';

export function increment(value) {
  return {
    type: D_INCREMENT,
    payload: value,
  };
}

export function decrement(value) {
  return {
    type: D_DECREMENT,
    payload: value,
  };
}
