import {
  CallHandler,
  CanActivate,
  createParamDecorator,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { Observable } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { emitter } = require('../event');
import { GetHeader } from './getHeader.service';
@Injectable()
export class DatabaseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // When the request is GraphQL
    if ((context.getType() as string) === 'graphql') {
      const gqlExecutionContext = GqlExecutionContext.create(context);
      const response: Request = gqlExecutionContext.getContext().req;

      const single = GetHeader.getInstance();

      single.addHeader(response.headers.base);
      single.addHeader(response.headers.base2);
      console.log('INTERCEPTOR....', single.getHeader());
    }

    // When the request is HTTP
    if (context.getType() === 'http') {
      const http = context.switchToHttp();
      const response: Response = http.getResponse();
      console.log('HTTP...', response);
    }

    return next.handle();
  }
}
