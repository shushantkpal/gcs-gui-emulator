# Use the official Node.js image as the base image
FROM node:14-alpine
LABEL org.opencontainers.image.source="https://github.com/shushantkpal/gcs-gui-emulator"

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Specify the command to start the React app
CMD ["npm", "start"]
