FROM node:boron

MAINTAINER chris@datalinks.nl

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/routes
RUN mkdir -p /usr/src/app/cert
RUN npm install express 
RUN npm install fs
RUN npm install redis
RUN npm install body-parser
RUN npm install log4js
RUN npm install log4js-logstash

WORKDIR /usr/src/app

COPY server.js /usr/src/app/
COPY routes  /usr/src/app/routes

CMD ["node","server.js"]
