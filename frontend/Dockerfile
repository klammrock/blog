FROM nginx:1.21.5-alpine
COPY devops/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY build /app
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
