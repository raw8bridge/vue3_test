FROM node:16.17.1-bullseye

RUN apt-get update -qq

WORKDIR /app
COPY my-project ./

RUN apt update && yarn install

EXPOSE 5173
