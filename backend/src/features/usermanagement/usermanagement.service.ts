import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto'

@Injectable()
export class UsermanagementService {
    constructor(private readonly DB: PrismaService){}

    async testApi(payload: any) {
        try{
            console.log("payload", payload)
            throw Error("test error")
            // return Promise.resolve({
            //     message: "Test message",
            //     statusCode: 201, 
            //     data: payload
            // })
            return Promise.resolve(payload)
        }catch(error) {
            return Promise.reject(error)
        }
    }

    async create(payload: CreateUserDto) {
        try{
            const normalizedPayload = {
                first_name: payload.first_name,
                last_name: payload.last_name,
                email: payload.email,
                user_name: `${payload?.first_name} ${payload.last_name || ''}`,
                password: payload.password
            }
            console.log("this >>>", this)
            const userRes = await this.DB.user.create({
                data: normalizedPayload
            })
            return Promise.resolve({
                data: userRes,
                message: "success"
            })
        }catch(error){
            return Promise.reject(error)
        }
    }

    async update(id: string, data: UpdateUserDto) {
        try{
            return Promise.resolve(data)
        }catch(error){
            return Promise.reject(error)
        }
    }
}
