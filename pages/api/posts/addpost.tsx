import nc from 'next-connect'
import { validateRoute } from '../../../lib/auth'
import prisma from '../../../lib/prisma'


export default validateRoute(async(req,res,user) => {
    const {description, selectedCoin, priceWhenSelected, image} = req.body
    

   const newPost = await prisma.post.create({
        data : {
            description : description,
            selectedCoin : selectedCoin,
            priceWhenSelected : priceWhenSelected,
            image: image,
            user : {
                connect : {id : user.id}
            }
        }
    })
    res.json(newPost)


    })

    




    
  
    
    
    
