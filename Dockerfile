# Ref: https://www.knowledgehut.com/blog/web-development/how-to-dockerize-react-app
FROM node:16-alpine3.16 as builder
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm i

# Copy code
COPY . .

# Build the app
RUN npm run build

# Serve the app, using nginx
FROM nginx:1.19.0

# Copy template config file to nginx templates folder
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html
