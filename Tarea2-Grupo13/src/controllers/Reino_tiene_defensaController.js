import prisma from '../prismaClient.js'

//Create

const createReino_Defensa = async (req, res) => {
    const { id_reino, id_defensa} = req.body
    const reino_defensa = await prisma.Reino_tiene_defensa.create({
        data: {
            reino: {
                connect: {
                    id: id_reino,
                },
            },
            defensa: {
                connect: {
                    id: id_defensa,
                },
            }
        }
    })
    res.json(reino_defensa)
}

//Read

const getReinos_Defensas = async (req , res) => {
    const Reinos_tienen_defensas = await prisma.Reino_tiene_defensa.findMany()
    res.json(Reinos_tienen_defensas)
}

const getReino_DefensabyId = async (req, res) => {
    const { id_reino, id_defensa } = req.params
    const reino_defensa = await prisma.Reinos.findUnique({
        where: {
            id_reino: Number(id_reino),
            id_defensa: Number(id_defensa)
        }
    })
    res.json(reino_defensa)
}

//Delete

const deleteReino_Defensa = async (req, res) => {
    const { id } = req.params
    const reino_defensa = await prisma.Reino_tiene_defensa.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(reino_defensa)
}

const Reino_tiene_defensaController = {
    createReino_Defensa,
    getReinos_Defensas,
    getReino_DefensabyId,
    deleteReino_Defensa
}

export default Reino_tiene_defensaController