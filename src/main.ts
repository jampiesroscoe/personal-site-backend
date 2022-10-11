import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors({
    origin: ['https://roscoejampies1-khqzv.ondigitalocean.app/spacefun','https://roscoejampies1-khqzv.ondigitalocean.app','https://roscoejampies1-khqzv.ondigitalocean.app/'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders:
      'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for,strict-origin-when-cross-origin',
  })
  await app.listen(3000);
}
bootstrap();
