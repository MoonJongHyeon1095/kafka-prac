import { CommonModule } from '@app/common';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [CommonModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
