import { Controller, Post, Headers, Body, Query, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { DemoService } from './demo.service'
import { HeaderDto, BodyDto, QueryDto } from './dto'
import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { ControllerWrapperService } from 'src/utils/controller-wrapper/controller-wrapper.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('demo')
export class DemoController {
    constructor(
        private readonly demoService: DemoService,
        private readonly cws: ControllerWrapperService
     ) {}

    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: BodyDto,
        examples:  {
            default: {
              summary: 'Sample Order Body',
              value: {
                userId: "64fe123abc456def7890",
                items: [
                  { productId: "prod_001", quantity: 2 },
                  { productId: "prod_002", quantity: 1 }
                ],
                shippingAddress: {
                  street: "123 Developer Lane",
                  city: "Codeville",
                  postalCode: "12345",
                  country: "Devland"
                },
                paymentMethod: "credit_card"
              }
            }
          }
    })
    @Post("post-data")
    async postData(@Headers() header: HeaderDto, @Body() body: BodyDto, @Query() query: QueryDto, @Res() res: Response) {
        await validateOrReject(plainToInstance(HeaderDto, header))
        console.log("header >>>>>>>>>", header)
        return await this.cws.ControllerWrapper(this.demoService, this.demoService.postData, res, header, body, query)
    }

}
