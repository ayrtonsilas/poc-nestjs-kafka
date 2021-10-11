import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceConfig } from './configs/microserviceConfig';
import { configEnv } from './configs/configEnv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(microserviceConfig);

  await app.startAllMicroservices();
  await app.listen(configEnv.port, '0.0.0.0');
}
bootstrap();
