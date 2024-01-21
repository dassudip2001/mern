FROM node:20-alpine3.17
WORKDIR /app
COPY package.json /app/ 
COPY package-lock.json /app/
RUN npm install  
COPY . ./
EXPOSE 5173
CMD [ "npm","run","dev" ]