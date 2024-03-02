import { Module } from '@nestjs/common';
import { AuthGuard } from 'src/guards/AuthGuard';
import AuthGuardProvider from 'src/providers/AuthGuardProvider';

@Module({
  providers: [AuthGuard, AuthGuardProvider],
  exports: [AuthGuard],
})
export class AuthModule {}
