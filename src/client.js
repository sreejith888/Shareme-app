import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:"qp8kxikb",
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: "sknhtv4b6zKfxlc2ksqlqMutEwciUqDABOAIImIhkjkyOg6gpW3KFpHLwCjmIOX6ZdiyhriOx4IKTRrONTD1Y6tZYZPcN9Lur7p5JuZ2q3Vq4SUa98K59nosNr2JQtXeZCmzYd44YRFDjcH2otsXONBdCqJwmmdWJB2G0FDgfEBWUr8w4iDM",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
