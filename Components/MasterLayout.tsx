import {Box,Text,Flex} from '@chakra-ui/react'
import Sidebar from './sidebar'

const MasterLayout = ({children}) => {
    
  return(  
    <Box height="100vh" width="100vw">
        <Box position="absolute" top="0" width="250px" left="0">
                <Sidebar />
        </Box>    
        <Box marginLeft="250px" marginBottom="100px">
            <Box height="100vh">
                    {children}  
            </Box>
        </Box>


    </Box>

)}

export default MasterLayout