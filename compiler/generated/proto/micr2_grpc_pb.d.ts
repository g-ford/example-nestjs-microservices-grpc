// GENERATED CODE -- DO NOT EDIT!

// package: micr2
// file: proto/micr2.proto

import * as proto_micr2_pb from "../proto/micr2_pb";
import * as grpc from "grpc";

interface IMicr2ServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  findOne: grpc.MethodDefinition<proto_micr2_pb.Micr2ById, proto_micr2_pb.Micr2>;
}

export const Micr2ServiceService: IMicr2ServiceService;

export class Micr2ServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  findOne(argument: proto_micr2_pb.Micr2ById, callback: grpc.requestCallback<proto_micr2_pb.Micr2>): grpc.ClientUnaryCall;
  findOne(argument: proto_micr2_pb.Micr2ById, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_micr2_pb.Micr2>): grpc.ClientUnaryCall;
  findOne(argument: proto_micr2_pb.Micr2ById, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_micr2_pb.Micr2>): grpc.ClientUnaryCall;
}
