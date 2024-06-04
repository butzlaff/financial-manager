import { NextFunction, Request, Response } from 'express';

type ErrorHandler = {
  statusCode: number;
  message: string;
};

const ErrorHandler = (
  err: Error & ErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
    message: errMsg,
  });
};

export default ErrorHandler;
