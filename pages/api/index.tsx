import { validateRoute } from '../../lib/auth'
import prisma from '../../lib/prisma'


export default validateRoute(async(req,res,user) => {
    const allposts = await prisma.post.findMany({take : 3})

    res.json(allposts)



})

