const fs = require ('fs');

// when the event loop enters the poll phase, it has an empty queue
// i.e fs.readFile() has not completed, so it will wait for the number of ms remeaining
// until the soonest timer's threshold is reached.
// while it is waiting 95ms to pass, fs.readFile finishes reading the file and its callback
// which takes 10ms to complete is added to the poll queue and executed.
// when the callback finishes, there are no more callbacks in the queue, so the event loop
// will see that the threshold of the soonest timer has been  reached then wrap back to the
// timers phase to execute the timers callback
function someAyncOperation(callback) {
  // Assume this takes 95ms to complete

  // POLL 
  // it has two main functions , calculating how long it should block and poll for I/O, tthen
  // processing events in the poll queue.
  // When the event loop enters the poll phase and there are no timers scheduled, one of two things will happen:
  //  If the poll queue is not empty, the event loop will iterate through its queue of callbacks executing them synchronously until either the queue has been exhausted, or the system-dependent hard limit is reached.
  //  If the poll queue is empty, one of two more things will happen:
  //  If scripts have been scheduled by setImmediate(), the event loop will end the poll phase and continue to the check phase to execute those scheduled scripts.
  //  If scripts have not been scheduled by setImmediate(), the event loop will wait for callbacks to be added to the queue, then execute them immediately.
  // Once the poll queue is empty the event loop will check for timers whose time thresholds have been reached. If one or more timers are ready, the event loop will wrap back to the timers phase to execute those timers' callbacks.
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() -  timeoutScheduled;

  console.log(`${delay}ms have passed since i was schedelued`);
},100)

// do some asynchronous which takes 95ms to complete
someAyncOperation(() => {
  const  startCallback = Date.now();

  // do something that will take 10ms to complete
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
})

// check
//This phase allows a person to execute callbacks immediately after the poll phase has completed. 
//If the poll phase becomes idle and scripts have been queued with setImmediate(), the event loop may continue to the check phase rather than waiting.
// setImmediate() is actually a special timer that runs in a separate phase of the event loop. It uses a libuv API that schedules callbacks to execute after the poll phase has completed.
// Generally, as the code is executed, the event loop will eventually hit the poll phase where it will wait for an incoming connection, request, etc. However, if a callback has been scheduled with setImmediate() and the poll phase becomes idle, it will end and continue to the check phase rather than waiting for poll events.