import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions1 } from './client1';
import { grpcClientOptions2 } from './client2';
import { Observable } from 'rxjs';
import { Micr1ServiceClient } from 'src/protobuf/micr1_grpc_pb';
import { Micr2ServiceClient } from 'src/protobuf/micr2_grpc_pb';

@Controller('test')
export class TestController implements OnModuleInit {
  @Client(grpcClientOptions1)
  private readonly client1: ClientGrpc;

  @Client(grpcClientOptions2)
  private readonly client2: ClientGrpc;

  private micr1Service: Micr1ServiceClient;
  private micr2Service: Micr2ServiceClient;

  onModuleInit() {
    this.micr1Service = this.client1.getService<Micr1ServiceClient>(
      'Micr1Service',
    );
    this.micr2Service = this.client2.getService<Micr2ServiceClient>(
      'Micr2Service',
    );
  }

  @Get('client1')
  find1(): Observable<any> {
    return this.micr1Service.findOne({ id: 1 });
  }

  @Get('client2')
  find2(): Observable<any> {
    return this.micr2Service.findOne({ id: 3 });
  }
}
