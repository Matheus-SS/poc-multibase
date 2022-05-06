// eslint-disable-next-line @typescript-eslint/no-var-requires
const { EventEmitter } = require('events');

class CustomEventEmitter {
  eventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();
    this.initialize();
  }

  getEventEmitter() {
    return this.eventEmitter;
  }

  initialize() {
    this.eventEmitter.on('HEADER', ({ header }) => {
      console.log('event fired and captured with header', header);
    });
  }
}

module.exports = new CustomEventEmitter();
