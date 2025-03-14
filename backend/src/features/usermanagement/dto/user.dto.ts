import { IsString, IsEmail, IsOptional } from 'class-validator'
import { PartialType} from '@nestjs/mapped-types'

export class CreateUserDto {

    @IsString()
    first_name: string

    @IsOptional()
    @IsString()
    last_name?: string

    @IsEmail()
    email: string

    @IsString()
    password: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}