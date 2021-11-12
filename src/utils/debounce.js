export const debounce = (fn, delay) => {
  let timeOutId
  return function (...args) {
    console.log(timeOutId)
    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    timeOutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
// const debounce = (func, delay) => {
//     let debounceTimer
//     return function() {
//         const context = this
//         const args = arguments
//             clearTimeout(debounceTimer)
//                 debounceTimer
//             = setTimeout(() => func.apply(context, args), delay)
//     }
// }
