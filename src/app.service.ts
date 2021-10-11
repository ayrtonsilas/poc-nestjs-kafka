import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  check(): { date: number } {
    return { date: Date.now() };
  }
}
