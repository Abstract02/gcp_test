FROM node:20   

WORKDIR /home/app

COPY ./api/package*.json ./

RUN npm install

COPY ./api .

EXPOSE 8080

CMD ["npm", "start"]