# Use an official Node.js version
FROM node:18.12.1
# Set the working directory
WORKDIR /usr/src

# Copy package.json and yarn.lock to the container
COPY package*.json yarn.lock ./

# Install Node.js dependencies using Yarn
RUN yarn install

# Copy the rest of your application code
COPY . .

# Expose the port on which your app will run
EXPOSE 3000

# Define the command to run your app
CMD ["yarn", "start:dev"]
