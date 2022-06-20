import {Box, Table, Thead, Td, Tr, Tbody, IconButton, Th} from '@chakra-ui/react' 



const CoinTable = ({coins}) => {
    const topGainedList = coins.filter((coin, i) => (
        coin.price_change_percentage_24h > 15.00 
    ))
    return (
        <Box bg="transparent" color="white">
            <Box padding="10px" marginBottom="20px">
            
                <Table variant="unstyled"> 
                    <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2">
                        <Tr>
                            <Th>Top Gainers</Th>
                            <Th> 24 Hr Price Change</Th>
                            <Th> 24 Hr % Change</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            topGainedList.map((coin, i) => (
                                <Tr sx={{
                                    transition: 'all .3s', 
                                    '&:hover': {bg: 'rgba(255,255,255,0.1'}
                                    
                                    }} key={coin.id} cursor="cursor">
                                    <Td>
                                        {coin.name}
                                    </Td>
                                    <Td>
                                        $ {coin.current_price}
                                    </Td>
                                    <Td>
                                        {coin.price_change_percentage_24h} %
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </Box>
        </Box>

    )

}

export default CoinTable