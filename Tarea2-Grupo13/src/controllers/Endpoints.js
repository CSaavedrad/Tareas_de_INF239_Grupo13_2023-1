import prisma from '../prismaClient.js'

const getPersonajesbyFuerza = async (req , res) => {
    const personajes = await prisma.Personajes.findMany(
        {
            orderBy: {
                fuerza: 'desc',
            },
            take: 5
        }
    )
    res.json(personajes)
}

const get_cantHabitantes = async (req, res) => {
    const { id } = req.params
    const relationCount = await prisma.Reinos.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            _count: {
                select: { personajes: true },
            },
        },
    })
    res.json(relationCount)
}

const getGobernate = async (req, res) => {
    const { id } = req.params
    if(id){
        const personajes = await prisma.Personajes.findMany({
            where: {
                reinos: {
                    every: {
                        es_gobernante: true,
                        id_reino: Number(id)
                    },
                },
            },
            select:{
                id: true,
                nombre: true
            },
        })
        res.json(personajes)
    }
    else{
        const personajes = await prisma.Personajes.findMany({
            where: {
                reinos: {
                    every: {
                        es_gobernante: true,
                    },
                },
            },
            select:{
                id: true,
                nombre: true,
                reinos:{
                    select:{
                        id_reino: true
                    }
                }
            },
        })
        res.json(personajes)
    }
}

/*const getGobernate = async (req, res) => {
    const { id } = req.params
    const personajes = await prisma.Personajes.findMany({
        where: {
            reinos: {
                every: {
                    es_gobernante: true,
                    id_reino: Number(id)
                },
            },
        },
    })
    res.json(personajes)
}*/

const Endpoints = {
    get_cantHabitantes,
    getGobernate
}

export default Endpoints