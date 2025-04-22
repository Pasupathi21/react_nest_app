import { HttpException, Injectable } from '@nestjs/common';
import { HeaderDto, BodyDto, QueryDto } from './dto'; 
import { ResponseMapper } from 'src/utils/mapper/response.mapper.service';
import { GetDataList } from './dto/response/getdata.dto'

@Injectable()
export class DemoService {
    constructor(
        private readonly responseMapper:  ResponseMapper
    ){}

    async postData(header: HeaderDto, body: BodyDto, query: QueryDto) {
        return { message: "test hit" }
    }

    async getData() {
        let response: any = await fetch('https://dummyjson.com/c/d95d-3938-4620-954f')
        if (response?.ok){
            response = await response.json()
            const normalizedResponse = this.responseMapper.mapper(GetDataList, response)
            return normalizedResponse
        }
        return Promise.resolve('no data found')
    }
}
