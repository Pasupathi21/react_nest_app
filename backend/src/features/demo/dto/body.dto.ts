import { IsArray, IsNumber, IsObject, IsString, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'

export class ShippingAddress {
    @IsString()
    "street":string

    @IsString()
    "city": string

    @IsString()
    "postalCode": string

    @IsString()
    "country": string
}

export class Items {
    @IsString()
    productId: string

    @IsNumber()
    quantity: number

}

export class BodyDto {
    @ApiProperty()
    @IsString()
    userId: string

    @ApiProperty({ type: Items })
    @IsArray()
    @Type(() => Items)
    @ValidateNested({ each: true })
    items: Items[]

    @ApiProperty({ type: ShippingAddress })
    @IsObject()
    @Type(() => ShippingAddress)
    shippingAddress: ShippingAddress    

    @ApiProperty()
    @IsString({
        message: "paymentMethod is required"
    })
    paymentMethod: string
}
