// libs/common/common.module.ts

import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { CommonService } from './common.service';
import { kafkaConfig } from './kafka/kafka.config';
import { KafkaService } from './kafka/kafka.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        ...kafkaConfig,
      },
    ]),
  ],
  providers: [CommonService, KafkaService],
  exports: [CommonService, KafkaService],
})
export class CommonModule {}
