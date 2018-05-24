# targets:
#		   - all: execute build and run targets
#          - run: execute application
#          - build: build docker image
#          - clean: force prune all docker images (be careful to run) 
#

IMAGE ?= ruancasas/myaddress

all: build run

run:
	node index.js

build: 
	docker build -t $(IMAGE) $(PWD)

clean:
	docker rmi -f $(shell docker images -aq)

.PHONY: run \
		build \
		clean