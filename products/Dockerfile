# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app/products

COPY package.json .

RUN npm install bcrypt@5.0.1

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application will listen on
EXPOSE 8002

# Define the command to run your application
CMD ["npm", "start"]
