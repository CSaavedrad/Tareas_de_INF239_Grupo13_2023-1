import prisma from '../prismaClient.js'

//Create

const createPersonaje_reino = async (req, res) => {
    const { id_personaje, id_reino, fecha_registro, es_gobernante} = req.body
    const personaje_reino = await prisma.Personaje_habita_reino.create({
        data: {
            fecha_registro: new Date(fecha_registro + "+00:00"),
            es_gobernante,
            personaje: {
                connect: {
                    id: id_personaje,
                },
            },
            reino: {
                connect: {
                    id: id_reino,
                },
            }
        }
    })
    res.json(personaje_reino)
}

//Read

const getPersonaje_reino = async (req , res) => {
    const personaje_reino = await prisma.Personaje_habita_reino.findMany()
    res.json(personaje_reino)
}

const getPersonaje_reinobyIds = async (req, res) => {
    const { id_personaje, id_reino } = req.params
    const personaje_reino = await prisma.Personaje_habita_reino.findMany({
        where: {
            id_personaje: id_personaje,
            id_reino: id_reino
        }
    })
    res.json(personaje_reino)
}

//Update

const updatePersonaje_reinoes_gobernante = async (req, res) => {
    const { id_personaje, id_reino } = req.params
    const { es_gobernante } = req.body
    const personaje_reino = await prisma.Personaje_habita_reino.update({
        where: {
            id_personaje: id_personaje,
            id_reino: id_reino
        },
        data: {
            es_gobernante
        }
    })
    res.json(personaje_reino)
}

//Delete

const deletePersonaje_reino = async (req, res) => {
    const { id_personaje, id_reino } = req.params
    const personaje_reino = await prisma.Personaje_habita_reino.delete({
        where: {
            id_personaje: id_personaje,
            id_reino: id_reino
        }
    })
    res.json(personaje_reino)
}

const Personaje_habita_reinoController = {
    createPersonaje_reino,
    getPersonaje_reino,
    getPersonaje_reinobyIds,
    updatePersonaje_reinoes_gobernante,
    deletePersonaje_reino
}

export default Personaje_habita_reinoController