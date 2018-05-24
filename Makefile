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
	node index.js

run.docker:
	docker run --rm -p $(PORT) -it $(IMAGE) 

build: 
	docker build -t $(IMAGE) $(PWD)

clean:
	docker rmi -f $(shell docker images -aq)

.PHONY: run \
		run.docker \
		build \
		clean