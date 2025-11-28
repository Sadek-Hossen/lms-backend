# Step 1: Base image
FROM node:18-alpine

# Step 2: Working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the files
COPY . .

# Step 5: Expose the port and run
EXPOSE 5000
CMD ["npm", "start"]