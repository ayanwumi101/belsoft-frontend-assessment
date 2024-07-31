import { Box, Image, Button, Flex, Heading } from "@chakra-ui/react"


const index = () => {
  return (
    <Box as='header' borderBottom='1px solid lightgray' py='2'>
        <Box as='nav' w='90%' mx='auto'>
            <Flex>
                <Box w='300px'>
                    <Flex alignItems='center'>
                        <Image src='/assets/svgs/logo.svg' w='80px' />
                        <Heading fontSize={25}>Founder's Friday</Heading>
                    </Flex>
                </Box>
                <Box>
                    <Flex>

                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default index