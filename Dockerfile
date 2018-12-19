FROM node:8

COPY ./ /app
WORKDIR /app
RUN npm install

EXPOSE 80

CMD ["npm", "start"]