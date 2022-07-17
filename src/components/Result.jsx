import { Heading, Box, Button, Text, Image, Center } from '@chakra-ui/react'
import React from 'react'
import { GameStateContext } from "../context/Context";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export default function Result() {
  
// Here I imported all the data from context
var { score, setScore, seconds, minutes, hours } = useContext(GameStateContext);

  // I am multiplying the score with 10 to show the score
  let total = score * 10
  return (
    <>
     <Box w="90%" margin="auto" h="500px">
        <Box bgColor="lemonchiffon" w="100%" margin="auto" h="100px">
        <Text textAlign="center">
        IQ Test for kids from 7 to 16 year old
        </Text>
        <Center>
        <Link to="/">
         <Button  mt="10px" bgColor="khaki">
            Take test again
         </Button>
         </Link>
        </Center>
        </Box>
        <Box w="100%" bgColor="#EDF2F7" h="100%" display="flex">
            <Box>

            
            <Text textAlign="left" fontFamily="sans-serif" fontWeight="bold" >
              Your result:
              
              <br />
              <br />
              {/* Here I am displaying total time to complete the exam. */}
              Test time : {hours}:{minutes}:{seconds}, average users
              00 : 10 : 14
            </Text>
             
            <Text textAlign="left" fontFamily="sans-serif"  >
              Your IQ is {total}. 
              {
                total > 30 ? <Text textAlign="left" fontFamily="sans-serif"  >
                                Your corresponding to a above average of IQ.
                             </Text>
                             :
                             <Text textAlign="left" fontFamily="sans-serif"  >
                                 Your corresponding to a belove average of IQ.
                             </Text>
              } 

              {/* Here shown the score out of total questions. */}
              In this test you have {score} correct answers from 6 questions.
              {
                 total > 30 ? <Text textAlign="left" fontFamily="sans-serif"  >
                                 This is very good result at your age.
                              </Text> :
                              <Text textAlign="left" fontFamily="sans-serif"  >
                                 This is not very good result at your age.
                              </Text>
              }
               <br /> 
             
              <Text textAlign="left" fontFamily="sans-serif" fontWeight="bold" >
                Bubble hit :
              </Text>
              <Text textAlign="left" fontFamily="sans-serif"  >
                 Play popolar games in your
                 <br />
                 
                  Please not that the first four questions of the test were
                  only for practice.
                  
              </Text>
              <br />
              <Text textAlign="left" fontFamily="sans-serif" fontWeight="bold" >
                Share result:
              </Text>
            </Text>
            <br />
            <Box display="flex" h="40px" gap="10px">
               <Image src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/whatsapp-512.png"></Image>
               <Image src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png"></Image>
               <Image src="https://cdn-icons-png.flaticon.com/512/124/124021.png"></Image>
               <Image src="https://cdn-icons-png.flaticon.com/512/174/174863.png"></Image>
            </Box>
            </Box>
            <Box>
            <Box w="50%" margin="auto">
              <Image  alignItems="end"  w="45%"  src="https://image.shutterstock.com/image-vector/four-stars-icon-vector-illustration-260nw-1345214999.jpg"></Image>
              
             </Box>
            </Box>
        </Box>
     </Box>
     
    </>
  )
}
