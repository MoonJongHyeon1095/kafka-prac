import { PostOrderDto } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor() {}

  postOrder(data: PostOrderDto) {
    return data;
  }
}
