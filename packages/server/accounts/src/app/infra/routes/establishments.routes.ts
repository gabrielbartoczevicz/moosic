import { Router } from 'express';

import { makeCreateEstablishment } from '@/app/factories';

const createEstablishment = makeCreateEstablishment();

const establishmentsRoutes = Router();

establishmentsRoutes.post(createEstablishment.route, async (request, response) => {
  const res = await createEstablishment.controller.handle(request);
  return response.status(res.statusCode).json(res.body);
});

export { establishmentsRoutes };
