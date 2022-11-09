import { Module} from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ApiModule } from './api/api.module';
import { RouterModule, Routes } from "@nestjs/core";
import { appRoutes } from "./app.routes";
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*']
    }),
    ApiModule,
    RouterModule.register(<Routes>appRoutes)
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}