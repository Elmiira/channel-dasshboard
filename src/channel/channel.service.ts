import { IMessageList, IChannelIds } from './interfaces/index';
import { Injectable, Logger } from '@nestjs/common';
import { Messages , channelIds, user} from '../mock/index';
import { IPost } from './interfaces/index';
@Injectable()
export class ChannelService {
  logger = new Logger();
  constructor() {}

  findAllChannel(): IChannelIds {
    try {
      // Mock a key/value DB
      return { res: channelIds, status: 'ok' };
    } catch (error) {
      return this.handleError(error);
    }
  }

  findMessages(channelId: string): IMessageList {
    try {
      const result = Messages.list[channelId];
      return { res: result, status: 'ok' };
    } catch (error) {
      return this.handleError(error);
    }
  }

  findUserInfo(username: string): string {
    // In Real world should filter based on username
    return user.avatar;
  }

  updateChannelMessage(post: IPost): boolean {
    const { channelId } = post;
    Messages.list[channelId].push(post);
    return true;
  }

  handleError(error: string) {
    this.logger.error(error);
    switch (error) {
      case 'Error: Invalid input data':
        return { status: '400', res: [] };
      default:
        return { status: '503', res: [] };
    }
  }
};
