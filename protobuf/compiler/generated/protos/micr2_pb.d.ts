// package: micr2
// file: protos/micr2.proto

import * as jspb from "google-protobuf";

export class Micr2ById extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Micr2ById.AsObject;
  static toObject(includeInstance: boolean, msg: Micr2ById): Micr2ById.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Micr2ById, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Micr2ById;
  static deserializeBinaryFromReader(message: Micr2ById, reader: jspb.BinaryReader): Micr2ById;
}

export namespace Micr2ById {
  export type AsObject = {
    id: number,
  }
}

export class Micr2 extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Micr2.AsObject;
  static toObject(includeInstance: boolean, msg: Micr2): Micr2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Micr2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Micr2;
  static deserializeBinaryFromReader(message: Micr2, reader: jspb.BinaryReader): Micr2;
}

export namespace Micr2 {
  export type AsObject = {
    id: number,
    name: string,
  }
}

