gen_server:
	protoc --plugin=`which protoc-gen-ts_proto` --ts_proto_out=./server/node/ --ts_proto_opt=outputServices=grpc-js --proto_path=./schemas/ hello_world.proto

gen_client:
	protoc --plugin=`which protoc-gen-ts_proto` --ts_proto_out=./client/node/ --ts_proto_opt=outputServices=grpc-js --proto_path=./schemas/ hello_world.proto

gen:
	make gen_client;
	make gen_server;
