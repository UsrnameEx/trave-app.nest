import { Routes } from 'nest-router';
import { ApiModule } from "./api/api.module";
import { apiRoutes } from "./api/api.routes";

export const appRoutes: Routes = [
  {
    path: '/api',
    module: ApiModule,
    children: apiRoutes,
  },
];