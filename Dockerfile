FROM node:latest

WORKDIR /app
ARG ENVIRONMENT
ARG TOPIC_KAFKA
ENV ENVIRONMENT=$ENVIRONMENT
ENV TOPIC_KAFKA=$TOPIC_KAFKA
ENV PORT=80

COPY package*.json /app/
RUN yarn 
COPY . /app
RUN yarn build

EXPOSE 80

RUN ["chmod", "+x", "/app/init.sh"]
ENTRYPOINT ["sh","/app/init.sh"]