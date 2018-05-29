# targets:
#		   - all: execute build and run targets
#          - run: execute application
#		   - run.docker: execute application with docker
#          - build: build docker image
#		   - test: runs NodeJS tests
#          - clean: force prune all docker images (be careful to run) 
#          - db.migrate: initialize database migration
#

IMAGE ?= ruancasas/myaddress
PORT ?= 8080:8080

all: build run

run:
	node server/index.js

build:
	cd server; npm install

run.docker:
	docker run --name myaddress --rm -p $(PORT) -it $(IMAGE) 

build.docker:
	rootDir=$(shell git rev-parse --show-toplevel); \
	cd server; docker build -t $(IMAGE) $$rootDir/server

test:
	cd server; npm test

clean:
	docker rmi -f $(shell docker images -aq)

db.migrate:
	cd server; ${HOME}/.npm-packages/bin/sequelize db:migrate

.PHONY: run \
		run.docker \
		build \
		build.docker \
		test \
		db.migrate \
		clean
