FROM node:lts

RUN apt update \
 && apt upgrade -y \
 && rm -rf /tmp/* /var/tmp/* \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

USER node

RUN npm config set update-notifier false

RUN git config --global --add safe.directory /home/node/app

COPY . /home/node/app
WORKDIR /home/node/app
