# Install the node alpine server

FROM node:23-alpine3.19

# Add a working directory

WORKDIR /usr/app/

# Add the package.json file

ADD package.json ./

# Run the installation command

RUN npm install

# Copy all files
COPY . .

# Start the server.

CMD [ "node","index.js" ]
