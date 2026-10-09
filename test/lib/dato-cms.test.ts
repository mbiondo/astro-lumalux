import { expectTypeOf, test } from 'vitest';
import type { Home, Service, GalleryItem } from '../../src/types';
import { getHome, getProjects, getServiceById, getServices, getAllImages, getGallery } from '../../src/lib/dato-cms';

// Edit an assertion and save to see HMR in action

test('getHome', async () => {
  const home: Home = await getHome();
  expectTypeOf(home).toMatchTypeOf<Home>();
});

test('getServices', async () => {
  const services: Service[] = await getServices();
  expectTypeOf(services).toMatchTypeOf<Service[]>();
});

test('getGallery', async () => {
  const gallery = await getGallery();
  expectTypeOf(gallery).toBeArray();
});

test('getAllImages', async () => {
  const images = await getAllImages();
  expectTypeOf(images).toBeArray();
});

