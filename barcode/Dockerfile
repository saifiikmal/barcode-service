# create a file named Dockerfile
# FROM node:10-alpine

# RUN wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
#TRY 1
# RUN tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /usr/local/share/
# RUN ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/
#TRY 2
# RUN tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C ./
# RUN mv phantomjs-2.1.1-linux-x86_64.tar.bz2 /usr/local/bin/phantomjs
#TRY 3
# RUN npm install -g phantomjs@2.1.1 --unsafe-perm
# RUN phantomjs --version


FROM node:12.18.0-buster-slim

# Install graphics magick
RUN apt-get update && apt-get install -y graphicsmagick

RUN npm install

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY package.json /home/node/app
RUN npm install
#TRY 4
# RUN npm install -g phantomjs@2.1.1 --unsafe-perm
# RUN ln -s ./node_modules/phantomjs-prebuilt/bin/phantomjs /usr/local/bin/
# RUN ln ./node_modules/phantomjs-prebuilt/lib/phantom /usr/local/lib/
# RUN phantomjs --version
COPY . /home/node/app
# RUN cd /home/node/app/node_modules/puppeteer/.local-chromium/linux-756035/chrome-linux
# RUN ls

EXPOSE 3030
CMD ["npm", "start"]