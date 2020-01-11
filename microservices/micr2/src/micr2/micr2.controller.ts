import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Micr2ById, Micr2 } from '../protobuf/protos/micr2_pb';

@Controller()
export class Micr2Service {
  @GrpcMethod()
  findOne(data: Micr2ById.AsObject, metadata: any): Micr2.AsObject {
    const items = [
      { id: 3, name: 'John2' },
      { id: 4, name: 'Doe2' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
