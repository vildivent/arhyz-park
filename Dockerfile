FROM node

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i -g pnpm

RUN pnpm i

RUN pnpm build

EXPOSE 3005

CMD ["pnpm", "start"]