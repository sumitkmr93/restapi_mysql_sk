# FROM node:8
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# CMD node index.js
# EXPOSE 8081
FROM keymetrics/pm2:latest-alpine
WORKDIR /app
COPY package.json /app
RUN npm install pm2 -g
RUN npm install --production
COPY . /app
CMD ["pm2-runtime", "index.js"]
EXPOSE 8081
