import prisma from '../prismaClient.js'

const getPersonajesbyFuerza = async (req , res) => {
    try{
        const personajes = await prisma.Personajes.findMany(
            {
                orderBy: {
                    fuerza: 'desc',
                },
                take: 5
            }
        )
        res.json(personajes)
    } catch(error){
        console.error(error);
        res.status(500).json({error: "Error al ver top"})
    }
}
const getMasKarts = async (req, res) => {
    try{
        const personajes = await prisma.Personajes.findMany(
            {

                include: {
                    _count: {
                        select: { karts: true },
                    },
                },
                orderBy: {
                    karts: {
                        _count: 'desc',
                    },
                },
                take: 1
            }
        )
        res.json(personajes)
    } catch(error){
        console.error(error);
        res.status(500).json({error: "Error al ver Personaje con más karts"})
    }
}

const get_cantHabitantes = async (req, res) => {
    try{
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
    } catch(error){
        console.error(error);
        res.status(500).json({error: "Error al ver cantidad de habitantes"})
    }
}

const getGobernate = async (req, res) => {
    try{
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
    } catch(error){
        console.error(error);
        res.status(500).json({error: "Error al ver gobernante"})
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
    getMasKarts,
    getPersonajesbyFuerza,
    get_cantHabitantes,
    getGobernate
}

export default Endpoints