FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 4000

RUN npx prisma generate

CMD [ "npm", "start"]