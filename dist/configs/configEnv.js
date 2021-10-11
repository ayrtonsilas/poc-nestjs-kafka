"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configEnv = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.configEnv = {
    environment: process.env.ENVIRONMENT,
    port: process.env.PORT || 3000,
    topicKafka: process.env.TOPIC_KAFKA || 'test',
};
//# sourceMappingURL=configEnv.js.map