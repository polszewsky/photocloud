FROM node:alpine
 
WORKDIR /app
# install app dependencies
COPY package.json /app
 
RUN yarn install
 
# add app
COPY . /app
EXPOSE 3000
 
# start app
CMD ["yarn", "start"]