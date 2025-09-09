FROM node:18-alpine

WORKDIR /usr/src/app
COPY src/package*.json ./

RUN npm install --only=production

COPY src/ ./

EXPOSE 8080
CMD ["npm", "start"]

