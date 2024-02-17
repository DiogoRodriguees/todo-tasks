import { ConfigModule } from '@nestjs/config';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';

ConfigModule.forRoot();

const MessageClientConfig: ClientProviderOptions = {
  name: process.env.MESSAGE_BROKER as string,
  transport: Transport.RMQ,
  options: {
    urls: [process.env.MESSAGE_BROKER_URL as string],
    queue: process.env.MESSAGE_QUEUE_EMAILS as string,
    queueOptions: {
      durable: true,
    },
  },
};
export default MessageClientConfig;
