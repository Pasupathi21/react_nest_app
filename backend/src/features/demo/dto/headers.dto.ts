import { IsString, } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'


export class HeaderDto {
    @ApiProperty({ required: true, example: "3345365474" })
    @IsString()
    "x-request-id": string;
    
    @ApiProperty({ required: true, example: "aaaaaa" })
    @IsString()
    "x-session-token": string

    @ApiProperty({ required: true, example:"425365" })
    @IsString()
    "x-api-key": string
    
}