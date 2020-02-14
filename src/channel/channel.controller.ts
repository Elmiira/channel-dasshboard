import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { IMessageList, IChannelIds, IPost } from './interfaces/index';
import { ChannelService } from './channel.service';
import { PostDto } from './types/index';

@Controller('/channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get('/searchAll')
  getAllChannelIds(): IChannelIds {
    try {
      return this.channelService.findAllChannel();
    } catch (error) {
      return { status: '404', res: [] };
    }
  }

  @Get('/search:id')
  getMessages(@Param('id') channelName): IMessageList {
    try {
      return this.channelService.findMessages(channelName);
    } catch (error) {
      return { status: '404', res: [] };
    }
  }

  @Put()
  changeParentNode(@Body() post: PostDto): IPost {
    const { username, channelId, message } = post;
    const avatar = this.channelService.findUserInfo(username);
    const newPost = {
      avatar,
      channelId,
      title: username,
      primary: 'new Post',
      secondary: message,
    };
    const result = this.channelService.updateChannelMessage(newPost);
    if(result){
      return newPost;
    }
    return undefined;
  }
}
