
import { Controller, Body, Post, HttpCode, HttpStatus, Req, Res, UseGuards, Get, Headers } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto, SignUpDto } from '../dtos/export';
import { Public } from 'src/libs/decorators/exports';
import { ApiOperation } from '@nestjs/swagger';
import { AtGuard } from '../Guard/jwt.guard';

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

  @ApiOperation({ summary: 'verify token'})
  @Get('check')
  @UseGuards(AtGuard)
  async check(@Headers( 'Authorization') authHeader: string){
    const token = authHeader.replace('Bearer', '');
    return this.authService.check(token)
  }


}
