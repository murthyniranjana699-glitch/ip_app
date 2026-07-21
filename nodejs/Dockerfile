FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

USER node

EXPOSE 8000

CMD ["node", "app.js"]
