import { Box, Heading, Text, Link } from '@chakra-ui/react';

import Head from 'next/head';
import '@fontsource/sora';

export default function Home() {
  return (
    <Box
      minH="100vh"
      px="0.5"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>Dhruv Saxena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Heading>
          Hello World, I'm
          <Link color="teal.400" href="https://github.com/dhruvsaxena1998">
            {' '}
            Dhruv Saxena
          </Link>
        </Heading>
      </Box>
    </Box>
  );
}
