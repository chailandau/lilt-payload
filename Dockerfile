FROM node:18-alpine as base

FROM base as builder

WORKDIR /home/node
COPY package*.json ./

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime


ENV PAYLOAD_CONFIG_PATH=/home/node/dist/payload.config.js
ENV NODE_ENV=production

WORKDIR /home/node
COPY package*.json  ./

RUN yarn global add sass

RUN yarn install --production

COPY --from=builder /home/node/dist ./dist
COPY --from=builder /home/node/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]