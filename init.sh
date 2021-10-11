#!/bin/sh
if [ "$ENVIRONMENT" = "development" ];
then
    chmod +x /kafka_local/make-commands-executable.sh
    ./kafka_local/start
    ./kafka_local/kafka/topic/create $TOPIC_KAFKA
    npm run start:dev
else
    npm run start:prod
fi;
