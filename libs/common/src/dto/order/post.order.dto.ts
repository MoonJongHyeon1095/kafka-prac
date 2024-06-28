import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostOrderDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
