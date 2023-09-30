import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './infrastructure/exceptions/exception.filter';
import { LoggingInterceptor } from './infrastructure/exceptions/logger.interceptor';
import {
  ResponseFormat,
  ResponseInterceptor,
} from './infrastructure/exceptions/response.interceptor';
import { LoggerService } from './infrastructure/logger/logger.service';

async function bootstrap() {
  const env = process.env.NODE_ENV;
  const app = await NestFactory.create(AppModule);
  // Filter
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));
  // Interceptors
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());
  // pipes
  app.useGlobalPipes(new ValidationPipe());

  // Base routing
  app.setGlobalPrefix('cogsz');

  // swagger config
  if (env !== 'production') {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle(`Cogs'z API`)
      .setDescription('Swagger Example')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      extraModels: [ResponseFormat],
      deepScanRoutes: true,
    });
    SwaggerModule.setup('/cogsz-api', app, document);
  }
  await app.listen(3000);
}
bootstrap();
