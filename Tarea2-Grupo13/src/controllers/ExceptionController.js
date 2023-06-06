import prisma from '../prismaClient.js'

const middleware = (error, req, res, next) => {
    let errorObject;

    if (typeof error.toJson === 'function') {
        errorObject = error.toJson();
    }
    else {
        errorObject = {
            status: 500,
            name: 'SystemError',
            message: 'Unknown Error'
        };
    }
    res.status(errorObject.status).json(errorObject);
};

const ErrorBaseController = {
    middleware
}

export default ErrorBaseController