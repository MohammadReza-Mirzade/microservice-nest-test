import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'test',
        brokers: ['localhost:29092'],
      },
      consumer: {
        groupId: 'test-consumer',
      },
    }
  });

  app.listen();
}
bootstrap();
