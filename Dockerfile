FROM node:18-alpine

# Create app directory

WORKDIR /app

# Install yarn and check the yarn version

# RUN npm install -g yarn

RUN yarn --version

# Install app dependencies

COPY package.json ./

COPY yarn.lock ./

RUN yarn


# Bundle app source

COPY . .

RUN yarn build
