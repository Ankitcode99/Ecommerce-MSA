# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app/shopping

COPY package.json .

# Install project dependencies
RUN npm install

RUN npm install bcrypt@5.0.1

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application will listen on
EXPOSE 8003

# Define the command to run your application
CMD ["npm", "start"]
