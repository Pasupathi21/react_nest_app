import { Controller, Body, Res, Req, Get, Post, Patch, Put, Delete } from '@nestjs/common';
import { UsermanagementService } from './usermanagement.service';
import { ControllerWrapperService } from 'src/utils/controller-wrapper/controller-wrapper.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto'


@Controller('user')
export class UsermanagementController {
  constructor(
    private readonly usermanagementService: UsermanagementService,
    private readonly cws :ControllerWrapperService,
    private readonly userService: UsermanagementService
  ) {}

  @Post()
  async create(@Res() res: Response, @Body() payload: CreateUserDto) { return this.cws.ControllerWrapper(this.userService.create, res, payload) }

  @Put()
  async update() {}
}
