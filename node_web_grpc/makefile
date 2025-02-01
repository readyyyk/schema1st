gen_server:
	protoc \
		--plugin=`which protoc-gen-ts_proto`\
		--ts_proto_out=./server/node/__gen \
		--ts_proto_opt=outputServices=grpc-js \
		--proto_path=./schemas/ \
		hello.proto

gen_client:
	protoc \
		--plugin=`which protoc-gen-ts_proto`\
		--ts_proto_out=./client/web/__gen \
		--ts_proto_opt=env=browser,outputServices=nice-grpc,outputServices=generic-definitions,outputJsonMethods=false,useExactTypes=false \
		--proto_path=./schemas/ \
		hello.proto

gen:
	make gen_client;
	make gen_server;
