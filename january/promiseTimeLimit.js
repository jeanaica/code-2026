/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    const timeoutPromise = new Promise((resolve, reject) => {
        return setTimeout(() => reject("Time Limit Exceeded"), t)
    });

    return function(...args) {
        return Promise.race([fn(...args), timeoutPromise])
    };
};
