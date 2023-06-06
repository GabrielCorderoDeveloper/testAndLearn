function debounce(callback, delay, immediate = false) {
    let timerID;
    
    return function(...args) {
        clearTimeout(timerID);

        const shouldCallImmediate = timerID == null && immediate;

        if (shouldCallImmediate) {
            callback.apply(this, args);
        }

        timerID = setTimeout(() => {
            if (!immediate) {
                callback.apply(this, args);
            }
            timerID = null;
        }, delay);
    }
  }
  