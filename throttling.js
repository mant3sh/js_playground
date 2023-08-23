function Throtlling(cb, delay) {
  let timerId;
  let lastRan;
  return function () {
    const args = this.arguments;
    const context = this.context;
    if (!lastRan) {
      cb.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (Date.now() >= lastRan + delay) {
          cb.apply(context, args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}

function betterThrotlling(
  cb,
  delay,
  option = { leading: true, traling: true }
) {
  let timerId;
  let lastArgs;

  return function (...args) {
    const { leading, traling } = option;
    const context = this.context;
    const waitFn = () => {
      if (traling && lastArgs) {
        cb.apply(context, args);
        lastArgs = null;
        timerId = setTimeout(waitFn, delay);
      } else {
        timerId = null;
      }
    };

    if (!timerId && leading) {
      cb.apply(context, args);
    } else {
      lastArgs = args;
    }
    if (!timerId) {
      timerId = setTimeout(waitFn, delay);
    }
  };
}
