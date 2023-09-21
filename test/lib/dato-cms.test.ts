import { expectTypeOf, test } from 'vitest';
import type { Home, Service } from '../../src/types';
import { getHome, getServiceById, getServices } from '../../src/lib/dato-cms';

// Edit an assertion and save to see HMR in action

test('getHome', async () => {
  const home: Home = await getHome();
  expectTypeOf(home).toMatchTypeOf<Home>();
});

test('getServices', async () => {
  const services: Service[] = await getServices();
  expectTypeOf(services).toMatchTypeOf<Service[]>();
});
