// GENERATED CODE -- DO NOT EDIT!

// package: micr1
// file: micr1.proto

import * as micr1_pb from "./micr1_pb";
import * as grpc from "grpc";

interface IMicr1ServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  findOne: grpc.MethodDefinition<micr1_pb.Micr1ById, micr1_pb.Micr1>;
}

export const Micr1ServiceService: IMicr1ServiceService;

export class Micr1ServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  findOne(argument: micr1_pb.Micr1ById, callback: grpc.requestCallback<micr1_pb.Micr1>): grpc.ClientUnaryCall;
  findOne(argument: micr1_pb.Micr1ById, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<micr1_pb.Micr1>): grpc.ClientUnaryCall;
  findOne(argument: micr1_pb.Micr1ById, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<micr1_pb.Micr1>): grpc.ClientUnaryCall;
}
