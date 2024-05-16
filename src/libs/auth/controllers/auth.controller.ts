
import { Controller, Body, Post, HttpCode, HttpStatus, Req, Res } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto, SignUpDto } from '../dtos/export';
import { Public } from 'src/libs/decorators/exports';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() userLoginDto: LoginDto) {
    return this.authService.login(userLoginDto);
  }

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() signUpDto: SignUpDto) {
    return this.authService.register(signUpDto);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(@Req() req, @Res() res) {
    res.clearCookie('access_token');
    res.clearCookie('refresh_token');
    return { success: true };
    // return this.authService.logout(req, res);
  }


}
