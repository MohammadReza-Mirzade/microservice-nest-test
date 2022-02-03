import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Ctx, KafkaContext, MessagePattern, Payload} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('quickstart')
  killDragon(@Payload() message, @Ctx() context: KafkaContext) {
    console.log(message);
    console.log(context);
  }
}
