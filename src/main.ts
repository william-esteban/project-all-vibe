import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Authentication API')
    .setDescription(
      'API for User Authentication and Security Management\n\n' +
        'This API handles user authentication, registration, and security token management. ' +
        'It provides endpoints for user registration, login, logout, password reset, and token management, ' +
        'enabling secure access to resources and ensuring data privacy and integrity.\n\n' +
        'Key Features:\n' +
        '- User Registration: Allows users to create accounts with validation measures.\n' +
        '- User Login and Logout: Enables secure authentication and logout functionality.\n' +
        '- Password Management: Supports secure password reset and recovery processes.\n' +
        '- Token-Based Authentication: Implements JWT-based authentication for scalability and security.\n' +
        'Developers can use this API to build secure authentication systems, facilitating user onboarding, ' +
        'authentication, and access control across web and mobile applications.',
    )
    .setVersion('1.0')
    .addTag('authentication')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
