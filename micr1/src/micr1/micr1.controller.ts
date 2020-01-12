import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Micr1ById, Micr1 } from 'protos-compiler/generated/protos/micr1';

@Controller()
export class Micr1Service {
  @GrpcMethod()
  findOne(request: Micr1ById, metadata: any): Micr1 {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];

    console.log('here micr1', items);

    return items.find(({ id }) => id === request.id);
  }
}
