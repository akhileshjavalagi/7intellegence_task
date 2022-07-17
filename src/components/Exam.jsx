
            import {
               Box,
               chakra,
               Button,
               Image,
               Heading
            } from '@chakra-ui/react';
            import { useEffect, useState, useRef } from 'react';
            import  Result  from './Result'
            import {questions} from "./Questions"
            import { Link } from 'react-router-dom';
            import { useContext } from "react";
            import { GameStateContext } from "../context/Context";
            import { useNavigate } from 'react-router';
            export default function Exam() {

            // I took one state to display questions and answers one by one
            const [currentquestion, setCurrentQuestion] = useState(0);

            // I took one state for select the answers
            const [choosenOption, setChooseOption] = useState("")

            // This is the navigation to navigate the result page
            const navigate = useNavigate();

            // This is all the data which are imported from usecontext
            var { score,
                        setScore,
                        seconds,
                        minutes,
                        hours,
                        time, setTime,
                        timerOn, setTimeOn, } = useContext(GameStateContext);

            // This is timer for starting 
            const timer = useRef(null);


            // This is the function to start the timing of the examination
            useEffect(
                (timer) => {
                     if (timerOn) {
                        timer = setInterval(() => {
                        setTime((prev) => prev + 10);
                     }, 10);
                 } else if (!timerOn) {
                     clearInterval(timer);
                  }
            return () => {
                 clearInterval(timer);
                };
             },
                 [timerOn]
            );
           
            // This is the function to stop the timing after completion of the exam.
            const handleStop = () => {
                 setTimeOn(false);
            };
            
            // This is the function to display next questions one by one
            const next = () =>{
               
            // Here I am incrementing the current question
               setCurrentQuestion(currentquestion+1)
            
            // I put condtion to to redirect to the result page.
            // If all the questions are completed then we should go to result page.
               if(currentquestion==5){
                 alert("exam completed successfully")
                 navigate("/result")
               }

            // Here I am counting the score of the exam.
               if(questions[currentquestion].answer == choosenOption){
                 setScore(score + 1)
               }
            }

            // This function is to take previous question.
            const back = () =>{
               if(currentquestion>=1){
                   setCurrentQuestion(currentquestion-1)
               }
               
            }
          
            return (
            <>
               <Box h="800px" bgColor="#6b6fbc" maxW="10xl"  mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            
              {/* Here is the count of the question. It shows the question number */}
              <Heading size="md" color="white" >{currentquestion} / 6 </Heading>
              <Box mt="20px" h="130px">
                  {/* Here I am displaying the questionImage by the help of currentquestion 
                  using index. */}
                 <Image h="100%" margin="auto" src={questions[currentquestion].questionImage}></Image>
              </Box>

                <chakra.h1
                  textAlign={'center'}
                  fontSize={'4xl'}
                  fontWeight={'bold'}
                  color="white">
                  {questions[currentquestion].question}
                </chakra.h1>

              {/* Here I have given the chooseoption to find the correct answer */}
              <Box display="flex" justifyContent="space-between" mt="30px">
                 <Image  onClick={()=>{
                        setChooseOption("1")
                 }} _hover={{ bg: "#E53E3E" }}
                  w="15%"  src={questions[currentquestion].option1}></Image>
                 <Image
            
                 onClick={()=>{
                        setChooseOption("2")
                 }} _hover={{ bg: "#E53E3E" }} w="15%" src={questions[currentquestion].option2}>
                 </Image>

                 <Image 
                 onClick={()=>{
                        setChooseOption("3")
                 }} _hover={{ bg: "#E53E3E" }} w="15%" src={questions[currentquestion].option3}>
                 </Image>
                 
                 <Image
                 onClick={()=>{
                        setChooseOption("4")
                 }} _hover={{ bg: "#E53E3E" }} w="15%" src={questions[currentquestion].option4}>         
                 </Image>
                 
                 <Image
                 onClick={()=>{
                        setChooseOption("5")
                 }} _hover={{ bg: "#E53E3E" }} w="15%" src={questions[currentquestion].option5}>
                </Image>
                 
                 <Image
                 onClick={()=>{
                        setChooseOption("6")
                 }} _hover={{ bg: "#E53E3E" }} w="15%" src={questions[currentquestion].option6}>           
                 </Image>
              </Box>
               
               <Box w="50%" margin="auto" justifyContent="space-between" gap="10px" display="flex" mt="20px">
               
               
               <Button  _hover={{ bg: "grey" }} w="20%"  onClick={back}>Back</Button>
              
                <Button w="20%" _hover={{ bg: "grey" }} onClick={next} >Next</Button>
              
               </Box>
             
             {/* Here I am doing condition rendering for the stoping the timer */}
              {
                 currentquestion==6 ? <Link to="/result"><Button _hover={{ bg: "grey" }} mt="20px" onClick={handleStop}>stop</Button>
                 </Link> : false
              }
              </Box> 
            </>
            
            );
          }