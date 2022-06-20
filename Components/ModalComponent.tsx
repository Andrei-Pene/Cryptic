import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Center,
    Select
    
  } from '@chakra-ui/react'
  import {useState}  from 'react'
  import React from 'react'
  import { post } from '../lib/mutations'

  const ModalComponent = ({coins}) => {
    
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [description, setDescription] = useState('')
    const [selectedCoin, setCoin] = useState('')
    
    
    const initialRef = React.useRef()
    

    

    const handleSubmit = async(e) => {
        e.preventDefault()
        const foundPrice = coins.filter((coin) => (
          coin.name === selectedCoin
        ))
        const priceWhenSelected = foundPrice[0].current_price;
        const image = foundPrice[0].image
        
        
        await post({description, selectedCoin, priceWhenSelected, image})


    }

    return (
        <>
      <Button marginTop="15px" marginLeft="10px" onClick={onOpen}>New Post</Button>
      

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>To the Moon?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
           
            <form onSubmit={handleSubmit}>
                                <Select
                                  id="selectedCoin"
                                  value={selectedCoin}
                                  onChange={(e) => setCoin(e.target.value) }
                                  marginBottom="10px"

                                >
                                
                                {
                                  coins.map((coin) => (
                                  
                                    <option key={coin.id}>{coin.name}</option>
                                    
                                    
                                    
                                  ))
                                }

                                
                                </Select>
                                <Input marginBottom="20px" placeholder="what do you think?"   onChange={(e) => setDescription(e.target.value)} />
                                <Center>
                                  <Button type="submit" bg="green.500"  sx={{'&:hover:': {bg : 'green.300'}}}>
                                    Submit
                                  </Button>   
                                </Center>

              </form>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
      )





  }

  export default ModalComponent