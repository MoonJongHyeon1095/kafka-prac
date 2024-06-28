import { CreateUserDto, PostOrderDto } from '@app/common';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthProducerService } from './auth.producer.service';
import { OrderProducerService } from './order.producer.service';

@Controller('v1/api')
export class ApiGatewayController {
  constructor(
    private readonly authProducerService: AuthProducerService,
    private readonly orderProducerService: OrderProducerService,
  ) {}

  @Post('/user/signup')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.authProducerService.createUser(createUserDto);
  }

  @Post('/order/send/:partition')
  async postOrder(
    @Body(ValidationPipe) postOrderDto: PostOrderDto,
    @Param('partition') partition: number,
  ) {
    return this.orderProducerService.postOrder(postOrderDto);
    //return { status: 'success', message: 'Message sent successfully' };
  }
}
