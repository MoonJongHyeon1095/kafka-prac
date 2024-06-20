import { Controller, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('v1/api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('send/:message')
  async sendMessage(@Param('message') message: string) {
    return this.orderService.sendMessage(message);
  }
}
