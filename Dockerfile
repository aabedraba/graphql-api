FROM node:16-alpine

COPY  package.json package-lock.json ./

RUN npm install

COPY src src

CMD ["npm", "start"]