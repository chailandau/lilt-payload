FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

ARG PAYLOAD_PUBLIC_CAPROVER_WEBHOOK=${PAYLOAD_PUBLIC_CAPROVER_WEBHOOK}
ENV PAYLOAD_PUBLIC_CAPROVER_WEBHOOK=${PAYLOAD_PUBLIC_CAPROVER_WEBHOOK}

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./
COPY ./assets ./assets

RUN yarn install
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
