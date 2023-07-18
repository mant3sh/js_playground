async function resolveRandomTime(url) {
  const time = Math.random() * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time === 0) {
        // console.log("rejecting", url);
        reject();
      }
      //   console.log("resolving", url);
      resolve(() => "yess sucesss");
    }, time);
  });
}

async function fectchTimeOut(url, duration) {
  return new Promise((resolve, reject) => {
    // const control = new AbortController();
    let timer = null;
    // const signal = control.signal;
    let isAborted = false;
    resolveRandomTime(url)
      .then((e) => {
        clearTimeout(timer);
        if (!isAborted) {
          console.log("finally done ", url, e);
          resolve();
        }
      })
      .catch(() => {
        control.log("failed to fectch api fail");
        reject();
      });
    timer = setTimeout(() => {
      //   control.abort(() => {
      //     return "cant fetch under this time ";
      //   });
      console.log("aborting the mission ");
      isAborted = true;
    }, duration);
  });
}
fectchTimeOut("mahantesh", 600)
  .then((e) => {
    console.log("yayayayah", e);
  })
  .catch((e) => {
    console.log("error", e);
  });
