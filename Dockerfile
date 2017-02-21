FROM node:latest

RUN npm install --save app-store-scraper

WORKDIR /block

ADD https://raw.githubusercontent.com/assembleapp/scaffolds/master/.clients/assemble.js /block/

ADD . /block/
