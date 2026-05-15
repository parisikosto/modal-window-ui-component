FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY ./index.html ./
COPY ./style.css ./
COPY ./script.js ./
COPY ./favicon.ico ./

EXPOSE 80