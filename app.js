//to create web server in node js

//async_hooks helps to track errors on real time application 
//for debugging and logging purpose
//it helps to track the error in real time application
const express = require('express');
const async_hooks = require('async_hooks');
const fs = require('fs');
const app = express();

const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    const requestId = async_hooks.executionAsyncId();
    fs.writeSync(1, `Request ID: ${requestId} - Async operation init: ${asyncId}, Type: ${type}\n`);
  },
  before(asyncId) {
    const requestId = async_hooks.executionAsyncId();
    fs.writeSync(1, `Request ID: ${requestId} - Before async operation: ${asyncId}\n`);
  },
  after(asyncId) {
    const requestId = async_hooks.executionAsyncId();
    fs.writeSync(1, `Request ID: ${requestId} - After async operation: ${asyncId}\n`);
  },
  destroy(asyncId) {
    const requestId = async_hooks.executionAsyncId();
    fs.writeSync(1, `Request ID: ${requestId} - Destroy async operation: ${asyncId}\n`);
  }
});

hook.enable();

// Middleware to track request ID
app.use((req, res, next) => {
  req.requestId = Date.now();
  fs.writeSync(1, `Request ID: ${req.requestId} - Request received\n`);
  next();
});

app.get('/', (req, res) => {
  setTimeout(() => {
    fs.writeSync(1, `Request ID: ${req.requestId} - Simulating async task\n`);
    res.send('Hello, world!');
  }, 1000);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
