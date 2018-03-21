module.exports = printStack => (err, req, res, next) => {
    if (err.isJoi) err.status = 422;
    const stack = err.stack.split('\n    ');

    const response = {
        message: (err.response && err.response.data) || err.message,
        status: err.status || (err.response && err.response.status) || 500
    };

    if(printStack) {
        response.stack = stack
    }

    return res.status(response.status).send(response);
};
