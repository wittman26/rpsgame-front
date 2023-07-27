#STAGE 1
# Use an existing Image as base
FROM node:latest as node

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm ci

# Build application for production
RUN npm run build --prod

#STAGE 2
#Use existing Image of Nginx (web server)
FROM nginx:alpine

#Copy from Image called node to this
COPY --from=node /app/dist/rpsgame-front /usr/share/nginx/html

#Expose on port 80
EXPOSE 80