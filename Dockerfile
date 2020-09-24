FROM node:current
WORKDIR /tps-site
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5000
CMD [ "nodemon", "server.js" ]