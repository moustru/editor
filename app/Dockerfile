FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/
RUN npm ci
RUN npm run panda
RUN npm run prepare

COPY . .

CMD [ "npm", "run", "dev" ]