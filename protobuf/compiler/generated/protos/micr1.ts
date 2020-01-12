import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';


export interface Micr1ById {
  id: number;
}

export interface Micr1 {
  id: number;
  name: string;
}

const baseMicr1ById: object = {
  id: 0,
};

const baseMicr1: object = {
  id: 0,
  name: "",
};

export interface Micr1Service {

  FindOne(request: Micr1ById): Promise<Micr1>;

}

export class Micr1ServiceClientImpl implements Micr1Service {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  FindOne(request: Micr1ById): Promise<Micr1> {
    const data = Micr1ById.encode(request).finish();
    const promise = this.rpc.request("micr1.Micr1Service", "FindOne", data);
    return promise.then(data => Micr1.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new global.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const Micr1ById = {
  encode(message: Micr1ById, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): Micr1ById {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMicr1ById) as Micr1ById;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Micr1ById {
    const message = Object.create(baseMicr1ById) as Micr1ById;
    if (object.id) {
      message.id = Number(object.id);
    }
    return message;
  },
  fromPartial(object: DeepPartial<Micr1ById>): Micr1ById {
    const message = Object.create(baseMicr1ById) as Micr1ById;
    if (object.id) {
      message.id = object.id;
    }
    return message;
  },
  toJSON(message: Micr1ById): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    return obj;
  },
};

export const Micr1 = {
  encode(message: Micr1, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    writer.uint32(18).string(message.name);
    return writer;
  },
  decode(reader: Reader, length?: number): Micr1 {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMicr1) as Micr1;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Micr1 {
    const message = Object.create(baseMicr1) as Micr1;
    if (object.id) {
      message.id = Number(object.id);
    }
    if (object.name) {
      message.name = String(object.name);
    }
    return message;
  },
  fromPartial(object: DeepPartial<Micr1>): Micr1 {
    const message = Object.create(baseMicr1) as Micr1;
    if (object.id) {
      message.id = object.id;
    }
    if (object.name) {
      message.name = object.name;
    }
    return message;
  },
  toJSON(message: Micr1): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    obj.name = message.name || "";
    return obj;
  },
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T[P] extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T[P] extends Date | Function | Uint8Array | undefined
  ? T[P]
  : T[P] extends infer U | undefined
  ? DeepPartial<U>
  : T[P] extends object
  ? DeepPartial<T[P]>
  : T[P]
};