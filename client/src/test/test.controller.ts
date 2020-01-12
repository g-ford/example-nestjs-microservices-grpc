import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions1 } from './client1';
import { grpcClientOptions2 } from './client2';
import { Micr1Service } from 'protos-compiler/generated/protos/micr1';
import { Micr2Service } from 'protos-compiler/generated/protos/micr2';
import { Micr1ById } from 'protos-compiler/generated/protos/micr1_pb';

@Controller('test')
export class TestController implements OnModuleInit {
  @Client(grpcClientOptions1)
  private readonly client1: ClientGrpc;

  @Client(grpcClientOptions2)
  private readonly client2: ClientGrpc;

  private micr1Service: Micr1Service;
  private micr2Service: Micr2Service;

  onModuleInit() {
    this.micr1Service = this.client1.getService<Micr1Service>('Micr1Service');
    this.micr2Service = this.client2.getService<Micr2Service>('Micr2Service');
  }

  @Get('client1')
  find1(): any {
    return this.micr1Service.FindOne({ id: 1 });
  }

  @Get('client2')
  find2(): any {
    return this.micr1Service.FindOne({ id: 3 });
  }
}
