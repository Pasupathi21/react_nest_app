import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { RequestResponseService } from '../request-response/request-response.service';
import { Response } from 'express'
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class ControllerWrapperService {
    constructor(
        private readonly responseService: RequestResponseService,
        private readonly DB: PrismaService
    ) {}
    async ControllerWrapper (serviceCB: (...values: any[]) => Promise<any> | any, response: Response | any, ...rest: Record<string, any>[] | Record<string, any>[]) {
        try{
            const cbResponse = await serviceCB(...rest)
            if (!cbResponse?.data) cbResponse.data = { ...cbResponse }

            return RequestResponseService.success(response, cbResponse?.data, cbResponse?.message, cbResponse?.statusCode)
        }catch(error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

export const ControllerWrapper = async (serviceCB: (...values: any[]) => Promise<any> | any, response: Response | any, ...rest: Record<string, any>[] | Record<string, any>[]) => {
    try{
        const cbResponse = await serviceCB(...rest)
        if (!cbResponse?.data) cbResponse.data = { ...cbResponse }

        return RequestResponseService.success(response, cbResponse?.data, cbResponse?.message, cbResponse?.statusCode)
    }catch(error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}
