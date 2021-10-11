"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microserviceConfig_1 = require("./configs/microserviceConfig");
const configEnv_1 = require("./configs/configEnv");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice(microserviceConfig_1.microserviceConfig);
    await app.startAllMicroservices();
    await app.listen(configEnv_1.configEnv.port, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map