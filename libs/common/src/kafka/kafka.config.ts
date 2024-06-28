import { KafkaOptions, Transport } from '@nestjs/microservices';
import { Partitioners } from '@nestjs/microservices/external/kafka.interface';

export const kafkaConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'test-clientId',
      brokers: ['localhost:9092'], // Kafka 브로커 주소
    },
    consumer: {
      groupId: 'test-groupId', // Kafka 컨슈머 그룹 ID
    },
  },
};
