import { ConfigModule } from '@nestjs/config';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';

ConfigModule.forRoot();

const ClientMessageMailConfig: ClientProviderOptions = {
  name: process.env.MAIL_CLIENT as string,
  transport: Transport.RMQ,
  options: {
    urls: [process.env.MESSAGE_BROKER_URL as string],
    queue: process.env.MESSAGE_QUEUE_EMAILS as string,
    queueOptions: {
      durable: true,
    },
  },
};

export default ClientMessageMailConfig;
