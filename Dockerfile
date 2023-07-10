# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN ls -al

# Install the application dependencies
RUN npm install

# Bundle the app source code inside the Docker image
COPY . .

# Our app listens on port 3000, so we'll expose this port
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]