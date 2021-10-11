"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microserviceConfig = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.microserviceConfig = {
    transport: microservices_1.Transport.KAFKA,
    options: {
        client: {
            brokers: ['kafka:29092'],
        },
        consumer: {
            groupId: '1',
            allowAutoTopicCreation: true,
        },
    },
};
//# sourceMappingURL=microserviceConfig.js.map