import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto'

@Injectable()
export class UsermanagementService {
    constructor(private readonly DB: PrismaService){}

    async create(data: CreateUserDto) {
        try{
            return Promise.resolve({
                data,
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
