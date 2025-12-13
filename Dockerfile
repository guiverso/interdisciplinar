# Base Node.js (conforme sugestão)
FROM node:18-alpine

# Necessário para o Prisma no Alpine Linux (conforme instruções)
RUN apk add --no-cache openssl

WORKDIR /usr/src/app

# Copia e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Comando NOVO: Gera o cliente do Prisma no container ANTES de rodar a aplicação 
# Substitui a linha 17
RUN npm run prisma:generate

EXPOSE 3000
# Porta 5555 para o Prisma Studio, se necessário
EXPOSE 5555

# Comando para iniciar o servidor (assumindo que api.js seja o ponto de entrada)
CMD [ "node", "api.js" ]