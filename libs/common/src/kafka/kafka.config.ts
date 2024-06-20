import { KafkaOptions, Transport } from '@nestjs/microservices';

export const kafkaConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'], // Kafka 브로커 주소
    },
    consumer: {
      groupId: '1', // Kafka 컨슈머 그룹 ID
    },
  },
};
