import { PostOrderDto } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class OrderProducerService {
  constructor(
    @Inject('ORDER_MICROSERVICE') private readonly orderClient: ClientKafka,
  ) {}
  postOrder(postOrderDto: PostOrderDto) {
    this.orderClient.emit('post_order', JSON.stringify(postOrderDto));
  }
}
