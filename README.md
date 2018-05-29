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
build | build node packages
build.docker | build docker image
run | execute application
run.docker | execute application with docker
clean | force prune all docker images

It is not needs to install Node in your system operational, just the Docker.

[Get Docker](https://www.docker.com/get-docker)

To run application with makefile:

```bash
make all 
OR
make build run
```

It will expose port 8080 to server api application (ex: http://localhost:8080/api/v1/address)

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

This option runs server at `http://<IP_ADDRESS>:8080/`

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
        "id": "3c60f170-6070-11e8-b2ce-a5c889a18731",
        "state": "Santa Catarina",
        "city": "Joinville",
        "zipCode": 89218112,
    }
}'
```

- Update address

Request example:

```bash
curl -X PUT https://localhost:8080/api/v1/address/1 \
     -H "Content-Type: application/json" \
     -d \
'{
    "zipCode": 89021987,
}'
```

Response example:

```bash
{
    "address": {
        "id": "3c60f170-6070-11e8-b2ce-a5c889a18731",
        "state": "Santa Catarina",
        "city": "Joinville",
        "zipCode": 89021987,
    }
}
```

- Fetch address by id

GET - /api/v1/address/{id}

Request example:

```bash
curl -X GET https://localhost:8080/api/v1/address/3c60f170-6070-11e8-b2ce-a5c889a18731
```

Response example:

```bash
{
    "address": {
        "id": "3c60f170-6070-11e8-b2ce-a5c889a18731",
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
            "id": "3c60f170-6070-11e8-b2ce-a5c889a18731",
            "state": "Santa Catarina",
            "city": "Joinville",
            "zipcode": 89218112,
        },
        {
            "id": "3c60f170-6070-11f4-4dce-a5c889a18333",
            "state": "Rio de Janeiro",
            "city": "Rio de Janeiro",
            "zipcode": 89230982,
        }
    ]
}
```

- Delete address by id

DELETE - /api/v1/address/{id}

Request example:

```bash
curl -X DELETE https://localhost:8080/api/v1/address/3c60f170-6070-11e8-b2ce-a5c889a18731
```


## DATA FORMAT

field | type | description
--- | --- | ---
state | string | the state name
city | string | the name of city
zipcode | int | the zip code