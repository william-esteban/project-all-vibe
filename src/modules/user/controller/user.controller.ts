import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    HttpStatus,
    HttpException,
  } from '@nestjs/common';
  import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
  import { CreateUserDto, UpdateUserDto } from '../dtos';
  import { UserService } from '../services/user.service';
  
  @ApiTags('users')
  @ApiBearerAuth()
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const createdUser = await this.userService.create(createUserDto);
        return { success: true, data: createdUser };
    }
  
    @Get()
    async findAll() {
        const users = await this.userService.findAll();
        return { success: true, data: users };
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
  
        const user = await this.userService.findOne(id);
        return { success: true, data: user };
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  
        const updatedUser = await this.userService.update(id, updateUserDto);
        return { success: true, data: updatedUser };
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.userService.remove(id);
        return { success: true, message: `User with id ${id} has been successfully deleted` };
    }
  }
    
