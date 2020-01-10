# NestJS + gRPC: a multi microservices example

This repo show as to configure a multi microservices stack in NestJS using gRPC in docker environment.


## Stack
* 2 microservices 
* 1 client

## Run it!
```bash
make proto_generate
make npm_install
make execute
```
Navigate to

```
http://localhost:3000/test/client1
http://localhost:3000/test/client2
```

## Reference
Documentation at https://mariobuonomo.dev/blog/tutorial-nestjs-microservices-grpc
