import { Injectable } from '@nestjs/common';
import { RequestResponseService } from '../request-response/request-response.service';

@Injectable()
export class ControllerWrapperService {
    constructor(private readonly responseService: RequestResponseService) {}
    async ControllerWrapper (serviceCB: (...values: any[]) => Promise<any> | any, response, ...rest: Record<string, any>[] | Record<string, any>[]) {
        try{
            const { data, message } = await serviceCB(...rest)
            return this.responseService.success(response, data, message)
        }catch(error) {
            
        }
    }
}
