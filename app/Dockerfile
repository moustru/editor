FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm config set registry https://registry.npmjs.org/ \
&& npm ci \
&& npm run prepare

CMD [ "npm", "run", "dev" ]