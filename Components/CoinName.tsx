import {Box, Image} from "@chakra-ui/react"
import Link from 'next/link'
type CoinProps = {
    
        name: string,
        current_price : number,
        id: string
        image:string
    
}


const CoinName = ({name,current_price,id, image}:CoinProps) => {
    return (
            
       <Link href={`/coin/${id}`} passHref>    
            <Box   
                maxW='lg' 
                borderWidth='1px' 
                borderRadius='lg' 
                overflow='hidden' 
                bg='pink.100'
                display='flex'>
            <Image src={image} alt='coin' boxSize='50px' />
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                                            
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'>
                                {name}
                        </Box>
                    </Box>
                                    
                </Box>
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                            >
                                ${current_price}
                        </Box>

            </Box>
        </Link>
    )
}

export default CoinName;