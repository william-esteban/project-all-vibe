import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: false, description: 'Username of the user' })
  @IsOptional()
  @IsString({ message: 'Username must be a string' })
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  @MaxLength(20, { message: 'Username must not be longer than 20 characters' })
  username: string;

  @ApiProperty({ description: 'Email of the user' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @MaxLength(100, { message: 'Email must not be longer than 100 characters' })
  email: string;

  @ApiProperty({ description: 'Password of the user' })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @MaxLength(20, { message: 'Password must not be longer than 20 characters' })
  password: string;

  @ApiProperty({ required: false, description: 'Role of the user' })
  @IsOptional()
  @IsString({ message: 'Role must be a string' })
  @MaxLength(20, { message: 'Role must not be longer than 20 characters' })
  role: string;
}
