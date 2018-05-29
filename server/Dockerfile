FROM node:8-alpine AS build

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install && \
    npm cache clean --force && \
    rm -rf /tmp/*

# Multi-stage
FROM alpine:3.7 

WORKDIR /app
COPY --from=build /app/node_modules node_modules
COPY . /app
RUN apk add --update nodejs-lts nodejs-npm bash
EXPOSE 8080

CMD ["node", "index.js"]