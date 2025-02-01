## Protobufs

- https://grpc.io/docs/protoc-installation/
- https://protobuf.dev/programming-guides/proto3/
- https://github.com/stephenh/ts-proto?tab=readme-ov-file
- https://medium.com/@torsten.schlieder/grpc-with-node-b73f51c54b12
- https://bundlephobia.com
- https://github.com/grpc/grpc-web
- https://www.npmjs.com/package/@grpc/grpc-js
- https://github.com/grpc/grpc-node/tree/@grpc/grpc-js@1.9.0/examples/routeguide/static_codegen
- https://grpc.io/docs/languages/node/basics/


```sh
# add `protoc` cli
brew install protobuf # Or specific for platform (read docs)

# add ts plugin for protoc
npm install -g ts-proto

# Regenerate ts files based on rpc
make gen

# Start server
cd server/node
npm ci
npm run start

# Start client
cd client/node
npm ci
npm run start
```

