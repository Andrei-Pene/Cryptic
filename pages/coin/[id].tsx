import {Box,Image} from "@chakra-ui/react"

type CoinProps = {
      
  coin: {
      name : string,
      symbol: string,
      id: string,
      image : {
        large: string
      }
  }
      
}

const Coin = ({coin}:CoinProps) => {

    return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image src={coin.image.large} alt='coin' />  
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {coin.symbol}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {coin.name}
        </Box>

        

        
      </Box>
    </Box>

    )

}

export default Coin;

export async function getServerSideProps(ctx) {
    
  try {
        const {id} = ctx.query
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const data = await res.json();
        const coinData = {
          name: data.name,
          symbol: data.symbol,
          image: data.image
        }
     
      
      return {
        props: {
            coin: coinData
        } 
      };
    } catch (error) {
      console.log(error);
      return {
        props: {},
      };
    }
  };

 