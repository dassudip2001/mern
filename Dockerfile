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


#  if build success the angular app then deploy the app in the nginx container



FROM nginx:1.21.3-alpine

COPY --from=0 /app/dist/ci-cd/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



