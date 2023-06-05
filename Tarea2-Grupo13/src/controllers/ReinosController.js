import prisma from '../prismaClient.js'

// Create

const createReino = async (req, res) => {
    const { nombre, ubicacion, superficie } = req.body
    const reino = await prisma.Reinos.create({
        data: {
            nombre,
            ubicacion,
            superficie
        }
    })
    res.json(reino)
}

// Read

const getReinos = async (req , res) => {
    const reinos = await prisma.Reinos.findMany()
    res.json(reinos)
}

const getReinobyId = async (req, res) => {
    const { id } = req.params
    const reino = await prisma.Reinos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(reino)
}

const reinoDiplomacias = async (req, res) => {
    const { id } = req.params
    const reino = await prisma.Reinos.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            diplomacia: true
        }
    })
    res.json(reino)
}

//Update

const updateReinoSuperficie = async (req, res) => {
    const { id } = req.params
    const { superficie } = req.body
    const reino = await prisma.Reinos.update({
        where: {
            id: Number(id)
        },
        data: {
            superficie
        }
    })
    res.json(reino)
}

//Delete

const deleteReino = async (req, res) => {
    const { id } = req.params
    const reino = await prisma.Reinos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(reino)
}


const ReinosController = {
    createReino,
    getReinos,
    getReinobyId,
    reinoDiplomacias,
    updateReinoSuperficie,
    deleteReino
}

export default ReinosController