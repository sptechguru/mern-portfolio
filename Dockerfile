# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app for production
RUN npm run build

# Expose the application port
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]