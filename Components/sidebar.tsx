import NextLink from 'next/link'
import useSWR from 'swr';

import {
    Box,
    List,
    ListItem,
    LinkBox,
    LinkOverlay,
    VStack,
    Image,
    Divider,
    Text,
    Center
    
} from '@chakra-ui/react'


const fetcher = (url) => fetch(url).then((res) => res.json());
const Sidebar = () => {

  
  const { data, error,  } = useSWR('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false', 
  fetcher, { refreshInterval: 2000, revalidateOnMount: true, revalidateOnReconnect : true })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data)
  return (
        <Box 
        width="100%" 
        height="100vh" 
        bg="black" 
        paddingX="5px" 
        color="gray"
        borderBottom="5px"
        
        >   
            <Box marginBottom='40px' >
                <Center>
                    <NextLink href="/" passHref>
                        <LinkOverlay fontSize="50px">Cryptic</LinkOverlay>
                    </NextLink>
                </Center>
            </Box>
            <Divider orientation='horizontal'/>
            <Box marginTop="40px">
                    <VStack paddingTop="10px">
                        <List spacing={25}>
                                {
                                data.map((coin) => (
                                    <ListItem h='40px'  key={coin.id} >
                                        <LinkBox  
                                        maxW='lg' 
                                        
                                        
                                        overflow='hidden' 
                                        bg='green.500'
                                        display='flex' >
                                                <Image src={coin.image} alt='coin' boxSize='50px' />
                                                <Box display='flex' alignItems='baseline'>
                                                    
                                                    <Box
                                                        color='gray.500'
                                                        fontWeight='semibold'
                                                        letterSpacing='wide'
                                                        fontSize='xs'
                                                        textTransform='uppercase'
                                                        ml='6'>
                                                            <NextLink href={{
                                                            pathname : '/coin/[id]',
                                                            query : {id: coin.id}
                                                    
                                                            }}passHref>
                                                                <LinkOverlay color="white">
                                                                    <Box>{coin.name}</Box>
                                                                    <Box>${coin.current_price}</Box>
                                                                </LinkOverlay>

                                                            </NextLink>
                                                    </Box>
                                                </Box>
                                                
                                        </LinkBox>    
                                    </ListItem>
                                ))     
                                }       



                        </List>
                    </VStack>   
            </Box>
           
        


        </Box>

    )

}


export default Sidebar;

                                    