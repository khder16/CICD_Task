import { Request, Response } from 'express';

export const getApiStatus = (req: Request, res: Response): void => {
    res.status(200).json({ status: 'API is working' });
};

export const sendHelloMessage = (req: Request, res: Response): void => {
    res.status(200).json({ status: 'Hello from api' });
};

