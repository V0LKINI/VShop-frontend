# base image
FROM node:16.20.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

RUN npm install
RUN npm install -g vite
RUN npm install -g --unsafe-perm=true --allow-root

RUN chown -R node:node /app/node_modules

USER node

# start app
CMD ["npm", "run", "dev"]