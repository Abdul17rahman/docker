# Install a base image that acts as the opertaing system

FROM alpine:latest

# Run commands to install redis once the alpine is installed.

RUN apk add --update redis

# Setup a startup command

CMD [ "redis-server" ]