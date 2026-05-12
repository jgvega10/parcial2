import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')                  // ⬅️ 'auth' (sin slash)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')                  // ⬅️ 'register' (sin slash)
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }
}