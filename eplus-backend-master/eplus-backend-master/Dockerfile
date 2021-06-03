FROM strapi/base

WORKDIR /energyplus-backend

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

VOLUME /energyplus-backend/.tmp
VOLUME /energyplus-backend/public/uploads

EXPOSE 1337

CMD ["yarn", "start"]
