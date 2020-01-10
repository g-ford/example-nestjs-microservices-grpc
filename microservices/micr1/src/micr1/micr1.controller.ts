import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Micr1ById, Micr1 } from 'src/protobuf/protos/micr1_pb';

@Controller()
export class Micr1Service {
  @GrpcMethod()
  findOne(data: Micr1ById.AsObject, metadata: any): Micr1.AsObject {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
