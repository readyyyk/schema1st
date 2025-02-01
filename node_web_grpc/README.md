# Node - web - grpc

i'm so f-ing sad bout results:

- 55 bytes (minified)
- 70 not minified
- expected to should be probably 11+X for "Hello, John"
- json output `{"greeting":"Hello, John"}` weights 35 bytes uncompressed (check `server/nodeJson`)

## Tools

- envoy
- - what is? proxy
- - why? [because](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-web#preparing-the-server)
- [nice-grpc-web](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-web#preparing-the-server)
- [ts-proto build opt](https://github.com/stephenh/ts-proto?tab=readme-ov-file#:~:text=With%20%2D%2Dts_proto_opt%3DoutputServices%3Dgeneric,is%20nice%2Dgrpc.)

## How to

Run:

```sh
# Add envoy
brew install envoy # Or platform-specific

# Start envoy
envoy -c ./envoy.yaml

# Gen ts files based on .proto
make gen

# start server
cd server/node
npm ci
npm run start

# start client 
cd client/web
npm ci
npm run build
npm run start
```
