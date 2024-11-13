FROM node:23-alpine3.19

ADD package.json .

RUN npm install

COPY . .

CMD [ "node","index.js" ]