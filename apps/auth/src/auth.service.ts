import { CreateUserDto, User } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  createUser(data: CreateUserDto): void {
    console.log('authService createUser email: ' + data.email);
  }

  getUser(id: number): User {
    console.log('authService getUser id: ' + id);
    return { id: 1, name: 'test', email: 'test@test.com' };
  }
}
