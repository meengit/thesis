FROM node:10.17-alpine

ENV APP_ROOT /app

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm i pm2@latest -g
RUN npm ci

ENV HOST 0.0.0.0
