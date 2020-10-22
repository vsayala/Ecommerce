FROM node:latest as builder
WORKDIR /ECommerce-App
COPY . .
RUN npm i
RUN npm run build --prod



FROM nginx:alpine
COPY --from=builder /ECommerce-App/dist/ECommerce-App /usr/share/nginx/html
