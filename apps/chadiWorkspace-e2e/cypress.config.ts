import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run chadiWorkspace:serve:development',
        production: 'nx run chadiWorkspace:serve:production',
      },
      ciWebServerCommand: 'nx run chadiWorkspace:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
