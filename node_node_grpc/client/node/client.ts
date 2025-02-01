// @ts-check
import { credentials } from '@grpc/grpc-js'
import { HelloServiceClient, HelloWhoRq } from './hello_world.ts'

const client = new HelloServiceClient('localhost:5005', credentials.createInsecure())
const request = HelloWhoRq.create({ name: 'John' })

client.helloWho(request, (error, response) => {
  if (error) {
    throw error;
  }
  console.log(response.name)
})

