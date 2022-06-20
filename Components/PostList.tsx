import {Box, Image, HStack} from '@chakra-ui/react'
import useSWR from 'swr';

const PostsList = ({coins}) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('api/',fetcher )
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data)
return(
    <HStack spacing='5' marginLeft='10px'>
        {
          data.map((post) => {
            return(
              <Box key={post.id} width="20%">
                <Box maxW='sm' borderWidth='3px' borderRadius='lg' overflow='hidden'>
                  <Image src={post.image} alt="coin"/>

                  <Box p='6'>
                    <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    color='white'
                    >
                      {post.description}
                    </Box>

                  <Box color="white">
                  when posted : ${post.priceWhenSelected} 
                    
                  </Box>
                  <Box color="white">
                  post by : {post.user} 
                    
                  </Box>

              
                  </Box>
                </Box>
              

              </Box>
          )
          })
        }

    </HStack>
    )
}

export default PostsList;