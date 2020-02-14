import { Injectable, Logger } from '@nestjs/common';
import { user } from '../mock/index';
import { IAuth } from './interfaces/index';

@Injectable()
export class AuthService {
  logger = new Logger();
  constructor() {}
  authUser(username: string, password: string): IAuth {
    try {
      // Mock a key/value DB, Validate user and pass against db
      const result = { ...user, token: 'token' };
      return { res: result, status: 'ok' };
    } catch (error) {
      return { status: '401', res: undefined };
    }
  }
}
