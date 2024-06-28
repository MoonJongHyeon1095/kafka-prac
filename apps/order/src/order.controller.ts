import { Controller, Get, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller('v1/api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('send/:message/:partition')
  async sendMessage(
    @Param('message') message: string,
    @Param('partition') partition: number,
  ) {
    this.orderService.sendMessage(message, partition);
    return { status: 'success', message: 'Message sent successfully' };
  }

  @MessagePattern('my-topic')
  readMessage(@Payload() message: any) {
    console.log(
      'Received message',
      message.value.toString(),
      'from partition',
      message.partition,
    );
  }
}
