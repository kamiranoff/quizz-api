import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3333;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap().then(() => {
  console.log(`server started on port:${PORT}`);
}).catch(e => {
  console.log('bootstrap error', e);
});
