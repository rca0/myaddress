# targets:
#		   - all: execute build and run targets
#          - run: execute application
#		   - run.docker: execute application with docker
#          - build: build docker image
#          - clean: force prune all docker images (be careful to run) 
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

clean:
	docker rmi -f $(shell docker images -aq)

.PHONY: run \
		run.docker \
		build \
		build.docker \
		clean
