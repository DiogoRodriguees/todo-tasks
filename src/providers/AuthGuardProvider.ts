import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guards/AuthGuard';

const AuthGuardProvider = { provide: APP_GUARD, useClass: AuthGuard };
export default AuthGuardProvider;
