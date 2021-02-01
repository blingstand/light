FROM nginx:1.17.1-alpine
COPY dist/light /usr/share/nginx/html

