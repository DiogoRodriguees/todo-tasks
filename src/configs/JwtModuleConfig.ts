import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

const JwtModuleConfig = {
  global: true,
  secret: process.env.JWT_SECRET,
};

export default JwtModuleConfig;
