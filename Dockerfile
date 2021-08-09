# build stage
FROM mhart/alpine-node:14 as build-stage

# Create app folder
RUN mkdir /app
WORKDIR /app

# Environment app
ARG VUE_APP_GRAPHQL_URI=$VUE_APP_GRAPHQL_URI

# Copy all files to app folder
COPY package*.json ./
RUN npm install --progress=false
COPY . /app

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
