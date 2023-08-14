function throttle(callback, delay) {
    let lastCalledTime = 0;

    const throttledFunction = function(...args) {
        const currentTime = Date.now();
        const timeSinceLastCall = currentTime - lastCalledTime;
        const daelayRemaining = delay - timeSinceLastCall;

        if (daelayRemaining <= 0) {
            lastCalledTime = currentTime;
            callback.apply(this, args);
        }
    }
  }