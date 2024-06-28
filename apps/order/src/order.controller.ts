import { PostOrderDto } from '@app/common';
import { Controller, Get, Param, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller('v1/api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @EventPattern('post_order')
  async handleOrderPost(@Payload(ValidationPipe) data: PostOrderDto) {
    this.orderService.postOrder(data);
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
