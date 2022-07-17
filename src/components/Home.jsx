
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image,
  Center
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; //this is link imported from react-router-dom

export default function Home() {

  return (
    <>
    <Box bgColor="#6b6fbc" w="100%">
      <Container w="100%" h="60%">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 10, md: 16 }}
          py={{ base: 20, md: 36 }}>
            <Image w="20%" h="20%" m="auto" 
            src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg"
            ></Image>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
            lineHeight={'150%'}>
            IQ Test for kids from 7 to 16 year old
          </Heading>
          <Center>
            {/* In the below start button I have given link of route exam page */}
           <Link to="exam" w="40%"> 
          <Button bg={'green.400'}  rounded={'full'}>Start test</Button>
          </Link>
          </Center>
          <Text color={"white"}>
          Most IQ tests are not suitable for children, as 
          they are originally developed for the adult population. 
          However, if you want to know the IQ of a child between 
          the ages of 7 and 16, there are several tests that can 
          help you. There is an IQ test for children, developed by 
          us, which, unlike similar ones, can also determine the 
          IQ level of children at the age of 6 years.The child will 
          be shown a series of three pictures arranged with some 
          regularity. Children will need to choose pictures that 
          are suitable for an empty cell. 
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
          </Stack>
        </Stack>
      </Container>
      </Box>
    </>
  );
}

