export function errorHandler(error, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        message: "Internal Server Error",
    });
}

