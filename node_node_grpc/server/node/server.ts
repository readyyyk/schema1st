// @ts-check
import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall } from '@grpc/grpc-js'
import { HelloServiceService, HelloRs, HelloWhoRq } from './hello_world.ts'

function helloWho(call: ServerUnaryCall<HelloWhoRq, HelloRs>, callback: sendUnaryData<HelloRs>) {
    console.log("Called sayHello with req:", call.request)
    callback(null, HelloRs.create({ name: 'Hello, ' + call.request.name }))
}

type TImpl<T> = Record<keyof T, (...args: any)=>void>;

const server = new Server();
server.addService(HelloServiceService, { helloWho } satisfies TImpl<HelloServiceService>);
server.bindAsync('0.0.0.0:5005', ServerCredentials.createInsecure(), (error, port) => {
    console.log(error ? error.message : 'Server listening on port ' + port)
})

