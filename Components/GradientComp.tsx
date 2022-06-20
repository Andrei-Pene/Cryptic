import {Box, Flex, Text} from '@chakra-ui/layout'
import {Image} from '@chakra-ui/react'
import useSWR from 'swr';

const GradientLayout = ({
    color,
    image,
    title,
    children,
    roundImage
}) => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR('api/user',fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <Box height="100%" 
        overflowY="auto" 
        bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}>
            <Flex bg={`${color}.600`} padding="40px" align="end">
                <Box padding="20px">
                    <Image boxSize="160px" boxShadow="2xl" src={image} alt="abramov" borderRadius={roundImage ? '100%' : '3px' } />
                </Box>
                <Box padding="20px" lineHeight="40px" color="white">
                    <Text fontSize="sm" fontWeight="bold" casing="uppercase">
                        Hello
                    </Text>
                    <Text fontSize="6xl">{data.firstName}</Text>
                    <Text fontSize="md">{data.postCount} posts</Text>
                    
                    
                </Box>
            </Flex>
            <Box paddingY="50px">{children}</Box>
        </Box>
    )
}

export default GradientLayout