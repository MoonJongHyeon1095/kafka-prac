import { KafkaService } from '@app/common/kafka/kafka.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(private readonly kafkaService: KafkaService) {}

  async sendMessage(message: string) {
    return this.kafkaService.sendMessage(message);
  }
}
