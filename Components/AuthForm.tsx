import {Box, Flex , Input , Button, Center } from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {auth} from '../lib/mutations'
import {FC, useState} from 'react'
import Link from 'next/link'

const AuthForm: FC<{mode: 'signin' | 'signup'}> = ({mode}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setisLoading(true)

        await auth(mode, {email, password, firstName,lastName})
        setisLoading(false)
        router.push('/')

    }
    

  

    return (
        
        <Center>
            <Box height="100vh" width="100vw" bg="black" color="white">
            <Flex justify="center" align="center" height="100px" borderBottom="white" >
                    hello
            </Flex> 
            <Flex justify="center" align="center" height="calc(100vh - 100px" >
                <Box padding="50px" bg="gray.900" borderRadius="6px">
                    <form onSubmit={handleSubmit}>
                            <Input marginBottom="20px" placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                            <Input marginBottom="20px" placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                            {
                                mode === "signup" &&
                                <Box>
                                    <Input marginBottom="20px" placeholder="first name"  onChange={(e) => setFirstName(e.target.value)} />
                                    <Input marginBottom="20px"  placeholder="last name"  onChange={(e) => setLastName(e.target.value)} />
                                </Box>

                            }
                            <Center>
                                <Button marginRight='10px' type="submit" bg="green.500" isLoading={isLoading} sx={{'&:hover:': {bg : 'green.300'}}}>
                                    {mode}
                                </Button>
                                {
                                    mode === 'signin' ?

                                    <Link  href='/signup'> Create Account </Link>

                                    :

                                    <Link  href='/signin'> Already have an account? </Link>
                                }
                            </Center>

                    </form>
                
                </Box> 
            </Flex>
            
            </Box>
        </Center>
    )

}

export default AuthForm