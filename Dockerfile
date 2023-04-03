FROM node:16.15.1-alpine as build

ARG environment=development
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install 
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration $environment


FROM nginx:1.17.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/software /usr/share/nginx/html