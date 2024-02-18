import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from 'src/services/AuthGuard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'my-secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
