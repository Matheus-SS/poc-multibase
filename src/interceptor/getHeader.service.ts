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

export class GetHeader {
  header = {};
  private static instace: GetHeader;
  constructor() {}

  public static getInstance(): GetHeader {
    if (!GetHeader.instace) {
      GetHeader.instace = new GetHeader();
    }

    return GetHeader.instace;
  }

  public addHeader(header) {
    this.header = {
      ...this.header,
      [header]: header,
    };
  }

  public getHeader() {
    return this.header;
  }

  // public getHeader2() {
  //   return this.findHeader();
  // }

  public findHeader(header) {
    return this.header[header];
  }
}
