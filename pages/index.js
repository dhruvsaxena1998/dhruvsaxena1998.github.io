import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react';

import Head from 'next/head';
import '@fontsource/sora';

export default function Home() {
  return (
    <Flex
      minH="100vh"
      px="0.5rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Head>
        <title>Dhruv Saxena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Heading>
          Hello World, I'm
          <Link
            color="teal.400"
            href="https://github.com/dhruvsaxena1998"
            _hover={{
              textDecor: 'none',
              color: 'blue.400',
            }}
          >
            {' '}
            Dhruv Saxena
          </Link>
        </Heading>
      </Box>
    </Flex>
  );
}
