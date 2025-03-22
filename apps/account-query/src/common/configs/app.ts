import { env } from 'node:process';
import { AppConfigs } from 'common/types/configs';

export default function (): AppConfigs {
  return {
    APP: {
      NODE_ENV: env?.NODE_ENV ?? 'development',
      PORT: env?.PORT ? parseInt(env.PORT, 10) : 3000,
    },
  };
}
