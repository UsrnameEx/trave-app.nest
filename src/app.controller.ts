import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from './app.service';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/api')
  main(): string {
    return 'This action returns all cats';
  }
}
