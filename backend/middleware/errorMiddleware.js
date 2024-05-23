// backend/middleware/errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    // Log the error for debugging purposes
    console.error(err.stack);

    // Check for specific error types and respond accordingly
    if (err.name === 'ValidationError') {
        // Handle Mongoose validation errors
        const errors = Object.values(err.errors).map(error => error.message);
        return res.status(400).json({ success: false, error: errors });
    } else {
        // For other types of errors, respond with a generic error message
        return res.status(500).json({ success: false, error: 'Server Error' });
    }
};

module.exports = errorHandler;
