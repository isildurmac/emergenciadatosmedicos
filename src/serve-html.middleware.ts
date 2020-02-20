import { Injectable, NestMiddleware } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class ServeHtmlMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.path.includes('api')) {
      return next();
    }

    // change the path to the correct html page path in your project
    res.sendFile(join(__dirname, '../client/client/build/index.html'));
  }
}
