# myAddress

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

