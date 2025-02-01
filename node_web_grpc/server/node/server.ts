// @ts-check
import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall } from '@grpc/grpc-js'
import { HelloService, HelloRs, HelloRq } from './__gen/hello.ts'

function helloWho(call: ServerUnaryCall<HelloRq, HelloRs>, callback: sendUnaryData<HelloRs>) {
    console.log("[node-web] Called sayHello with req:", call.request)
    callback(null, HelloRs.create({ greeting: 'Hello, ' + call.request.name }))
}

type TImpl<T> = Record<keyof T, (...args: any)=>void>;

const server = new Server();
server.addService(HelloService, { helloWho } satisfies TImpl<HelloService>);
server.bindAsync('0.0.0.0:5005', ServerCredentials.createInsecure(), (error, port) => {
    console.log(error ? error.message : 'Server listening on port ' + port)
})

