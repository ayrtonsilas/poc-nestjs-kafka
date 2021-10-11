import * as dotenv from 'dotenv';

dotenv.config();

export const configEnv = {
  environment: process.env.ENVIRONMENT as string,
  port: process.env.PORT || 3000,
  topicKafka: process.env.TOPIC_KAFKA || 'test',
};
