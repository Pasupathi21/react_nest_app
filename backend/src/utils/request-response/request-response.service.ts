import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express'

type Data = Record<string, any> | Record<string, any>[] | unknown
@Injectable()
export class RequestResponseService {
    constructor() {}

    /**
     * 
     * @param response 
     * @param data 
     * @param message 
     * @param statusCode 
     * @returns 
     * failed response
     */
    success(@Res() response: Response, data: Data = {}, message: string = "success", statusCode: number = 200): Response {
        return response.status(statusCode).json({
            message: message,
            data,
            status: true,
            statusCode
        })
    }

    /**
     * 
     * @param response 
     * @param data 
     * @param message 
     * @param statusCode 
     * @returns 
     * failed response
     */
    failed(@Res() response: Response, data: Data = null, message: string = "success", statusCode: number = 500): Response {
        return response.status(statusCode).json({
            message: message,
            data,
            status: false,
            statusCode
        })
    }

    /**
     * 
     * @param response 
     * @param data 
     * @param message 
     * @param statusCode 
     * @returns 
     */
    send(@Res() response: Response, data: Data, message: string = "success", statusCode: number = 200, headers: Record<string, any> | null= null): Response {

        if (headers && Object.keys(headers).length) Object.keys(headers).forEach((h:string) => response.setHeader(h, headers[h]))  
        return response.status(statusCode).send(data)
    }
}
