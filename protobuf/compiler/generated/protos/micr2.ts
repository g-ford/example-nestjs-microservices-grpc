import { Reader, Writer } from 'protobufjs/minimal';
import * as Long from 'long';


export interface Micr2ById {
  id: number;
}

export interface Micr2 {
  id: number;
  name: string;
}

const baseMicr2ById: object = {
  id: 0,
};

const baseMicr2: object = {
  id: 0,
  name: "",
};

export interface Micr2Service {

  FindOne(request: Micr2ById): Promise<Micr2>;

}

export class Micr2ServiceClientImpl implements Micr2Service {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  FindOne(request: Micr2ById): Promise<Micr2> {
    const data = Micr2ById.encode(request).finish();
    const promise = this.rpc.request("micr2.Micr2Service", "FindOne", data);
    return promise.then(data => Micr2.decode(new Reader(data)));
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

export const Micr2ById = {
  encode(message: Micr2ById, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    return writer;
  },
  decode(reader: Reader, length?: number): Micr2ById {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMicr2ById) as Micr2ById;
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
  fromJSON(object: any): Micr2ById {
    const message = Object.create(baseMicr2ById) as Micr2ById;
    if (object.id) {
      message.id = Number(object.id);
    }
    return message;
  },
  fromPartial(object: DeepPartial<Micr2ById>): Micr2ById {
    const message = Object.create(baseMicr2ById) as Micr2ById;
    if (object.id) {
      message.id = object.id;
    }
    return message;
  },
  toJSON(message: Micr2ById): unknown {
    const obj: any = {};
    obj.id = message.id || 0;
    return obj;
  },
};

export const Micr2 = {
  encode(message: Micr2, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.id);
    writer.uint32(18).string(message.name);
    return writer;
  },
  decode(reader: Reader, length?: number): Micr2 {
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.create(baseMicr2) as Micr2;
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
  fromJSON(object: any): Micr2 {
    const message = Object.create(baseMicr2) as Micr2;
    if (object.id) {
      message.id = Number(object.id);
    }
    if (object.name) {
      message.name = String(object.name);
    }
    return message;
  },
  fromPartial(object: DeepPartial<Micr2>): Micr2 {
    const message = Object.create(baseMicr2) as Micr2;
    if (object.id) {
      message.id = object.id;
    }
    if (object.name) {
      message.name = object.name;
    }
    return message;
  },
  toJSON(message: Micr2): unknown {
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