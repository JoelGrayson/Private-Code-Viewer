FROM node:18
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "start"]
EXPOSE 3000
