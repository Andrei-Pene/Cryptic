import jwt from 'jsonwebtoken'
import prisma from './prisma'


export const validateRoute = (handler) => {
    return async (req,res) => {
        const token = req.cookies.TRAX_ACCESS_TOKEN

        if(token) {
            let user

          try{
            const vtoken = jwt.verify(token, "hello")
            user = await prisma.user.findUnique({where : {id:+vtoken.id}}) 
            
            if(!user) {
                throw new Error('invalid user')
            }
          }catch(error) {
            res.status(401)
            res.json({error : 'not authorized' })
            return
          }  
          return handler(req,res,user)
        }
        res.status(401)
        res.json({error : 'not authorized' })

        

    }

}

export const validateToken = token => {
  const user = jwt.verify(token, "hello")
  return user
}