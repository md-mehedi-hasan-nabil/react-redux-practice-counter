// create middleware
export default function myLogger(store) {
    return function (next) {
      return function (action) {
          console.log(store, next, action)
          return next(action)
      };
    };
  }