# Use Node.js 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Install global dependencies
RUN npm install -g serve

# Copy the local repository files into the container
COPY . .

# Install project dependencies
RUN npm install

# Build the project
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist"]
