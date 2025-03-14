import { Controller, Body, Res, Req, Get, Post, Patch, Put, Delete } from '@nestjs/common';
import { UsermanagementService } from './usermanagement.service';
import { ControllerWrapperService, ControllerWrapper } from 'src/utils/controller-wrapper/controller-wrapper.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto'


@Controller('user')
export class UsermanagementController {
  constructor(
    private readonly cws :ControllerWrapperService,
    private readonly userService: UsermanagementService
  ) {}

  @Post('test')
  async testApi(@Res() res: Response, @Body() payload: any) { 
    return this.cws.ControllerWrapper(this.userService.testApi, res, payload) }
  @Post('create')
  async create(@Res() res: Response, @Body() payload: CreateUserDto) { 
    return await ControllerWrapper(this.userService.create, res, payload) 
    // return await this.userService.create(payload)
  }

  @Put('update')
  async update() {}
}
