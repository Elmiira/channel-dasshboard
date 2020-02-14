import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IAuth } from './interfaces/index';
import { UserDto } from './types/index';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  login(@Body() userDto: UserDto): IAuth {
    try {
      const { username, password } = userDto;
      return this.authService.authUser(username, password);
    } catch (error) {
      return { status: '400', res: undefined };
    }
  }
}
