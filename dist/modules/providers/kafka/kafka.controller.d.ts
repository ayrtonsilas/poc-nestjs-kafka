import { OnModuleInit } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { ClientKafka } from '@nestjs/microservices';
export declare class KafkaController implements OnModuleInit {
    private readonly kafkaService;
    constructor(kafkaService: KafkaService);
    client: ClientKafka;
    onModuleInit(): void;
    testSend(): void;
    handleEntityCreated(payload: any): Promise<void>;
}
