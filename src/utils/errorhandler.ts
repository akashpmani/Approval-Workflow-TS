class ErrorHandler extends Error {
    statusCode: number;
    message: string;

    constructor(statusCode: number = 400, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export { ErrorHandler }