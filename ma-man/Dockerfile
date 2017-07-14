# select our base image to work from
FROM node:8.0.0-alpine

# Set the working dir inside the container
WORKDIR /usr/ma-man

# copy our app files into the container
COPY . .

# run npm install
RUN npm install
