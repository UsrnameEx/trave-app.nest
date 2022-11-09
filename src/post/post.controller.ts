import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "../app.service";
import { PostService } from "./post.service";

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Get("getPosts")
  async getPosts() {
    const posts = await this.postService.getPosts();

    return {
      status: "ok",
      items: posts
    };
  }

  @Get("getPostPage")
  async getPostPage(@Body() params) {
    const post = await this.postService.getPost(params.id);

    return {
      status: "ok",
      content: post
    };
  }
}
