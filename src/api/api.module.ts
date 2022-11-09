import { Module } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { ApiService } from "./api.service";
import { PostModule } from "../post/post.module";

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [PostModule]
})
export class ApiModule {
}
