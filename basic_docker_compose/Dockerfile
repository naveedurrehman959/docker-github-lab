FROM node:15-alpine AS prod
ARG PORT=8000
ENV PORT=$PORT
WORKDIR /app
COPY package*.json .
RUN npm install --production
COPY . .
EXPOSE $PORT
CMD ["npm", "start"]
