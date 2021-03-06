npm_install:
	docker-compose run node_1 		npm install
	docker-compose run node_2 		npm install
	docker-compose run node_client 	npm install

format:
	docker-compose run node_1 		npm run format
	docker-compose run node_2 		npm run format
	docker-compose run node_client 	npm run format

fix_permission:
	sudo chown -R ${USER}:${GROUP} ./

# npm_outdate:
# 	docker-compose run node npm outdate

# npm_ncu:
# 	docker-compose run node ncu-u

# start:
# 	docker-compose up -d
# 	docker-compose exec node npm start run

# debug:
# 	docker-compose up -d
# 	docker-compose exec node npm run start:debug

# stop:
# 	docker-compose stop

# test:
# 	docker-compose run node npm test