// package: micr1
// file: protos/micr1.proto

import * as jspb from "google-protobuf";

export class Micr1ById extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Micr1ById.AsObject;
  static toObject(includeInstance: boolean, msg: Micr1ById): Micr1ById.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Micr1ById, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Micr1ById;
  static deserializeBinaryFromReader(message: Micr1ById, reader: jspb.BinaryReader): Micr1ById;
}

export namespace Micr1ById {
  export type AsObject = {
    id: number,
  }
}

export class Micr1 extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Micr1.AsObject;
  static toObject(includeInstance: boolean, msg: Micr1): Micr1.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Micr1, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Micr1;
  static deserializeBinaryFromReader(message: Micr1, reader: jspb.BinaryReader): Micr1;
}

export namespace Micr1 {
  export type AsObject = {
    id: number,
    name: string,
  }
}

