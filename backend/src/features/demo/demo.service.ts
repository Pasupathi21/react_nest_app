import { Injectable } from '@nestjs/common';
import { HeaderDto, BodyDto, QueryDto } from './dto'; 

@Injectable()
export class DemoService {
    constructor(){}

    async postData(header: HeaderDto, body: BodyDto, query: QueryDto) {
        return { message: "test hit" }
    }
}
