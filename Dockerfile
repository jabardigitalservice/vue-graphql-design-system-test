# build stage
FROM mhart/alpine-node:14 as build-stage

# Create app folder
RUN mkdir /app
WORKDIR /app

# Copy all files to app folder
COPY package*.json ./
RUN npm install --progress=false
COPY . /app

# Environment app
ENV VUE_APP_GRAPHQL_URI $VUE_APP_GRAPHQL_URI

RUN echo ${VUE_APP_GRAPHQL_URI}

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]