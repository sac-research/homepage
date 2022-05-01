FROM ubuntu:latest
WORKDIR /build
COPY . .
RUN apt update && apt install -y \
    nodejs npm
RUN npm i
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]