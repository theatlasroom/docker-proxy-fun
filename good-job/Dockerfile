# Specify base image to use
FROM node:8.0.0-alpine

# run mkdir to create the dir

# Set the working directory for the app, inside the container
WORKDIR /usr/app

# copy package.json
# RUN npm install

# Copy the current directory contents into the container at our working directory
COPY . .

# Install any needed packages specified in package.json
RUN npm install

EXPOSE 80
