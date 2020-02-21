import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.useGlobalPipes(new ValidationPipe());
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  // await app.listen(process.env.PORT);

  // You can disable detailed validation error messages by
  /*app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );*/
}
bootstrap();
