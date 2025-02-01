import {createChannel, createClient} from 'nice-grpc-web';
import {
  HelloClient,
  HelloDefinition,
  HelloRq,
} from './__gen/hello.ts';

const channel = createChannel('http://localhost:8080');

const client: HelloClient = createClient(
  HelloDefinition,
  channel,
);


document.querySelector("button")!.onclick = async _=>{
  const x = await client.helloWho(HelloRq.create({name: "John"}));
  alert(JSON.stringify(x, null, 4));
}


