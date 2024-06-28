import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
@Injectable()
export class KafkaService implements OnModuleInit {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('my-topic');
    await this.kafkaClient.connect();
  }

  async sendMessage(message: string, partition: number): Promise<void> {
    try {
      //NestJS의 ClientKafka에서 send 메서드는 Observable을 반환합니다.
      //Observable은 리액티브 프로그래밍을 위한 강력한 도구이지만, 때로는 단순히 비동기 작업의 결과를 기다리는 것이 더 편리할 수 있습니다. Promise는 이러한 단순한 비동기 작업에 더 적합합니다.
      //firstValueFrom과 lastValueFrom을 사용하면 Observable을 Promise로 변환하여 더 익숙한 비동기 코드 패턴으로 사용할 수 있습니다. send 메서드의 경우, 우리는 메시지를 보내고 그 결과를 기다리는 간단한 비동기 작업을 수행하므로, 이 두 함수 중 하나를 사용하여 작업을 단순화할 수 있습니다.
      await firstValueFrom(
        this.kafkaClient.send('my-topic', {
          key: 'key',
          value: message,
          partition,
        }),
      );
      console.log(`Message sent to partition ${partition}: ${message}`);
    } catch (err) {
      console.error('Error sending message to Kafka', err);
      throw err;
    }
  }
}
