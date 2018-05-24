# myAddress

## Getting started 

Copy the repository:

```bash
git clone git@github.com:rca0/myaddress.git
```

## Using Makefile

targets | description
--- | ---
all | executes build and run targets
build | build docker image
run | execute application
clean | force prune all docker images

It is not needs to install Node in your system operational, just the Docker.

[Get Docker](https://www.docker.com/get-docker)

## Docker

- Run application

```bash
make run.docker
```

- Build image

This stage will build docker image. Name default: `ruancasas/myaddress`

 ```bash
 make build -e IMAGE=<name>
 ```

## Backend

- Running server

This option runs server at http://<IP_ADDRESS>:8080/

```bash
make run
```

## API

- Address creation

POST - /api/v1/address

Example:

```bash
curl -X POST https://localhost:8080/api/v1/address \
     -H "Content-Type: application/json" \
     -d \
'{
    "state": "Santa Catarina",
    "city": "Joinville",
    "zipCode": 89218112,
}'
```

## DATA FORMAT

field | type | description
--- | --- | ---
state | string | the state name
city | string | the name of city
zipcode | int | the zip code

