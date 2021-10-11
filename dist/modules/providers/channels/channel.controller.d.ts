import { OnModuleInit } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ClientKafka } from '@nestjs/microservices';
export declare class ChannelController implements OnModuleInit {
    private readonly channelService;
    constructor(channelService: ChannelService);
    client: ClientKafka;
    onModuleInit(): void;
    testSend(): void;
    handleEntityCreated(payload: any): Promise<void>;
}
