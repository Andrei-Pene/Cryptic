import { validateRoute } from '../../../lib/auth'
import prisma from '../../../lib/prisma'


export default validateRoute(async(req,res,user) => {
    const allposts = await prisma.post.findMany({take : 5 })

    res.json(allposts)



})