import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { RequestResponseService } from '../request-response/request-response.service';
import { Response } from 'express'
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class ControllerWrapperService {
    constructor(
        private readonly responseService: RequestResponseService,
    ) {}
    async ControllerWrapper (serviceInstance: Record<string, any> | null, serviceCB: (...values: any[]) => Promise<any> | any, response: Response | any, ...rest: Record<string, any>[] | Record<string, any>[]) {
        try{
            const bindServiceCb = serviceInstance ? serviceCB.bind(serviceInstance) : serviceCB
            const cbResponse = await bindServiceCb(...rest)
            if (!cbResponse?.data) cbResponse.data = { ...cbResponse }
            return this.responseService.success(response, cbResponse?.data, cbResponse?.message, cbResponse?.statusCode)
        }catch(error) {
            console.log("error >>>>>", error)
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

export const ControllerWrapper = async (serviceInstance: Record<string, any> | null, serviceCB: (...values: any[]) => Promise<any> | any, response: Response | any, ...rest: Record<string, any>[] | Record<string, any>[]) => {
    try{
        const bindServiceCb = serviceInstance ? serviceCB.bind(serviceInstance) : serviceCB
        const cbResponse = await bindServiceCb(...rest)
        if (!cbResponse?.data) cbResponse.data = { ...cbResponse }

        return new RequestResponseService().success(response, cbResponse?.data, cbResponse?.message, cbResponse?.statusCode)
    }catch(error) {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
}
