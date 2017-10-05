express-error-handler
=========

A error handler middleware for express

## Installation

`npm install @reges-hq/express-error-handler`

Or with yarn

`yarn add @reges-hq/express-error-handler`


## Usage

In your applications main entry point add:

```javascript
const expressErrorHandler = require('@reges-hq/express-error-handler');

const shouldPrintStack = true
app.use(expressErrorHandler(shouldPrintStack))
```
