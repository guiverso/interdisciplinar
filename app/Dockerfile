FROM node:18-alpine

RUN apk add --no-cache openssl

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY api.js ./
COPY prisma ./prisma
COPY public ./public
COPY routes ./routes


RUN npx prisma generate

EXPOSE 3000
EXPOSE 5555

CMD [ "node", "api.js" ]