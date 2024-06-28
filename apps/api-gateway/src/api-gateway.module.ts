import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiGatewayController } from './api-gateway.controller';
import { OrderProducerService } from './order.producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'ORDER_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'order',
            brokers: ['localhost:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'order-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [OrderProducerService],
})
export class ApiGatewayModule {}
