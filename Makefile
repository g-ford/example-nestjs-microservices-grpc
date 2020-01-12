command := docker-compose run -u 1000 --rm 

init:
	make proto_generate
	${command} node_1 		ncu -u
	${command} node_2 		ncu -u
	${command} node_client 	ncu -u
	
	${command} node_1 		npm install
	${command} node_2 		npm install
	${command} node_client 	npm install

format:
	${command} node_1 		npm run format
	${command} node_2 		npm run format
	${command} node_client 	npm run format

execute:
	docker-compose up

fix_permission:
	sudo chown -R ${USER}:${GROUP} ./

proto_generate:
	cd ./protobuf/compiler && ${command} generic npm install && ${command} generic cp -R /protos /app && ${command} generic sh compile.sh
