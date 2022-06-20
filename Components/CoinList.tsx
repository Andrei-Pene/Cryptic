import { HStack} from "@chakra-ui/react"
import CoinName from './CoinName'

type coinsProps =  {
    coins : {
        name: string,
        current_price : number,
        market_cap_rank : number,
        price_change_percentage_24h : number,
        id: string,
        image: string

    }[]
  }
  
    

const CoinList = ({coins}: coinsProps) => {
    const topFiveCoins = coins.filter(coin => {return coin.market_cap_rank <= 5})
    return (
        <HStack spacing='200px'> 
            {
                topFiveCoins.map(coin => {
                   return <CoinName 
                            key={coin.id} 
                            name={coin.name}
                            id={coin.id}
                            current_price={coin.current_price}
                            image={coin.image} 
                            />
                       
                })
                

            }

        </HStack>
       
)

}

export default CoinList;



