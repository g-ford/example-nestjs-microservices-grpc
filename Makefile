init:
	make proto_generate
	docker-compose run node_1 		npm install
	docker-compose run node_2 		npm install
	docker-compose run node_client 	npm install

format:
	docker-compose run node_1 		npm run format
	docker-compose run node_2 		npm run format
	docker-compose run node_client 	npm run format

execute:
	docker-compose up

fix_permission:
	sudo chown -R ${USER}:${GROUP} ./

proto_generate:
	cd ./protobuf/compiler && docker-compose run generic npm install && docker-compose run generic cp -R /protos /app && docker-compose run generic sh compile.sh
	make proto_cp

proto_cp:
	cp -R ./protobuf/compiler/generated ./microservices/micr1/src/protobuf
	cp -R ./protobuf/compiler/generated ./microservices/micr2/src/protobuf
	cp -R ./protobuf/compiler/generated ./client/src/protobuf