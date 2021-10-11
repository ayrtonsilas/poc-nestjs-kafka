"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelController = void 0;
const common_1 = require("@nestjs/common");
const channel_service_1 = require("./channel.service");
const microservices_1 = require("@nestjs/microservices");
const microserviceConfig_1 = require("./../../../configs/microserviceConfig");
const configEnv_1 = require("./../../../configs/configEnv");
let ChannelController = class ChannelController {
    constructor(channelService) {
        this.channelService = channelService;
    }
    onModuleInit() {
        const requestPatterns = [configEnv_1.configEnv.topicChannels];
        requestPatterns.forEach((pattern) => {
            this.client.subscribeToResponseOf(pattern);
        });
    }
    testSend() {
        this.client.emit(configEnv_1.configEnv.topicChannels, `{test: ${new Date()} }`);
    }
    async handleEntityCreated(payload) {
        console.log(JSON.stringify(payload) + ' created');
    }
};
__decorate([
    (0, microservices_1.Client)(microserviceConfig_1.microserviceConfig),
    __metadata("design:type", microservices_1.ClientKafka)
], ChannelController.prototype, "client", void 0);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChannelController.prototype, "testSend", null);
__decorate([
    (0, microservices_1.EventPattern)(configEnv_1.configEnv.topicChannels),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "handleEntityCreated", null);
ChannelController = __decorate([
    (0, common_1.Controller)('channels'),
    __metadata("design:paramtypes", [channel_service_1.ChannelService])
], ChannelController);
exports.ChannelController = ChannelController;
//# sourceMappingURL=channel.controller.js.map