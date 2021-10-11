import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import {
  Client,
  ClientKafka,
  ClientProxy,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { microserviceConfig } from '../../../configs/microserviceConfig';
import { configEnv } from '../../../configs/configEnv';

@Controller('kafka')
export class KafkaController implements OnModuleInit {
  constructor(private readonly kafkaService: KafkaService) {}

  @Client(microserviceConfig)
  client: ClientKafka;

  onModuleInit() {
    const requestPatterns = [configEnv.topicKafka];

    requestPatterns.forEach((pattern) => {
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @Get()
  testSend(): void {
    this.client.emit<string>(configEnv.topicKafka, `{test: ${new Date()} }`);
  }

  @EventPattern(configEnv.topicKafka)
  async handleEntityCreated(payload: any) {
    console.log(JSON.stringify(payload) + ' created');
  }
}
