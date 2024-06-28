import { KafkaService } from '@app/common/kafka/kafka.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(private readonly kafkaService: KafkaService) {}

  async sendMessage(message: string, partition: number) {
    try {
      await this.kafkaService.sendMessage(message, partition);
      console.log('Message sent successfully');
    } catch (err) {
      console.error('Error sending message', err);
      throw err;
    }
  }
}
