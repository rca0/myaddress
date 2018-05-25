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

Request example:

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

Response example:

```bash
{
    "address": {
        "id": 1,
        "state": "Santa Catarina",
        "city": "Joinville",
        "zipCode": 89218112,
    }
}'
```

- Fetch address by id

GET - /api/v1/address/{id}

Request example:

```bash
curl -X GET https://localhost:8080/api/v1/address/1
```

Response example:

```bash
{
    "address": {
        "id": 1,
        "state": "Santa Catarina",
        "city": "Joinville",
        "zipCode": 89218112,
    }
}
```

- List addreses

GET - /api/v1/address

Request Example:

```bash
curl -X GET https://localhost:8080/api/v1/address \
     -H "Content-Type: application/json" \
```

Response example:

```bash
{
    "total": 2,
    "addresses": [
        {
            "id": 1,
            "state": "Santa Catarina",
            "city": "Joinville",
            "zipcode": 89218112,
        },
        {
            "id": 2,
            "state": "Rio de Janeiro",
            "city": "Rio de Janeiro",
            "zipcode": 89230982,
        }
    ]
}
```

## DATA FORMAT

field | type | description
--- | --- | ---
state | string | the state name
city | string | the name of city
zipcode | int | the zip code