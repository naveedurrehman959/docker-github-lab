FROM node:20-alpine AS prod

ARG PORT=8000

ENV PORT=$PORT

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

ENV MY_ENV=prod

EXPOSE $PORT

CMD ["npm", "start"]

FROM prod AS dev

RUN npm install --only=dev \
    npm start 
