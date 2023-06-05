import prisma from '../prismaClient.js'

//Create

const createDiplomacia = async (req, res) => {
    const { id_reino1, id_reino2, es_aliado} = req.body
    const Diplomacia = await prisma.Diplomacias.create({
        data: {
            es_aliado,
            reino1: {
                connect: {
                    id: id_reino1,
                },
            },
            reino2: {
                connect: {
                    id: id_reino2,
                },
            }
        }
    })
    res.json(Diplomacia)
}

//Read

const getDiplomacias = async (req , res) => {
    const diplomacias = await prisma.Diplomacias.findMany()
    res.json(diplomacias)
}

const getDiplomaciabyIds = async (req, res) => {
    const { id_reino1, id_reino2 } = req.params
    const diplomacia = await prisma.Diplomacias.findMany({
        where: {
            id_reino1: id_reino1,
            id_reino2: id_reino2
        }
    })
    res.json(diplomacia)
}

//Update

const updateDiplomaciaes_aliado = async (req, res) => {
    const { id_reino1, id_reino2 } = req.params
    const { es_aliado } = req.body
    const diplomacia = await prisma.Diplomacias.update({
        where: {
            id_reino1: id_reino1,
            id_reino2: id_reino2
        },
        data: {
            es_aliado
        }
    })
    res.json(diplomacia)
}

//Delete

const deleteDiplomacia = async (req, res) => {
    const { id_reino1, id_reino2 } = req.params
    const diplomacia = await prisma.Diplomacias.delete({
        where: {
            id_reino1: id_reino1,
            id_reino2: id_reino2
        }
    })
    res.json(diplomacia)
}

const DiplomaciasController = {
    createDiplomacia,
    getDiplomacias,
    getDiplomaciabyIds,
    updateDiplomaciaes_aliado,
    deleteDiplomacia
}

export default DiplomaciasController