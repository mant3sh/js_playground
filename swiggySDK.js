function SDK() {
  this.logs = [];
  this.counter = 1;
  this.log = (event) => {
    this.logs.push(event);
  };
  this.wait = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.counter % 5 === 0) {
          reject();
        }
        resolve();
      }, 1000);
    });

  this.sendAnalytics = async () => {
    if (this.logs.length === 0) {
      return;
    }
    const currentEvent = this.logs.shift();
    try {
      const res = await this.wait();
      console.log("logged", currentEvent);
      this.counter++;
    } catch (e) {
      console.log("----------------");
      console.log("faild", currentEvent);
      console.log("retry ", currentEvent);
      console.log("----------------");
      this.counter = 1;
      this.logs.unshift(currentEvent);
    } finally {
      this.sendAnalytics();
    }
  };
}

const sdk = new SDK();

sdk.log("event 1");
sdk.log("event 2");
sdk.log("event 3");
sdk.log("event 4");
sdk.log("event 5");
sdk.log("event 6");
sdk.log("event 7");
sdk.log("event 8");
sdk.log("event 9");
sdk.log("event 10");
sdk.log("event 11");
sdk.log("event 12");
sdk.log("event 13");
sdk.log("event 14");
sdk.log("event 15");
sdk.sendAnalytics();
