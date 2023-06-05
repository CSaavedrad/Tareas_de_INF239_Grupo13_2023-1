import prisma from '../prismaClient.js'

//Create

const createDefensa = async (req, res) => {
    const { defensa } = req.body
    const Defensa = await prisma.Defensas.create({
        data: {
            defensa
        }
    })
    res.json(Defensa)
}

//Read

const getDefensas = async (req, res) => {
    const defensas = await prisma.Defensas.findMany()
    res.json(defensas)
}

const getDefensabyID = async (req, res) => {
    const { id } = req.params
    const defensa = await prisma.Defensas.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(defensa)
}

const defensasReinos = async (req, res) => {
    const { id } = req.params
    const defensa = await prisma.Defensas.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            reinos: true
        }
    })
    res.json(defensa)
}

//Update

const updateDefensaDefensa = async (req, res) => {
    const { defensa } = req.body
    const { id } = req.params
    const Defensa = await prisma.Defensas.update({
        where: {
            id: Number(id)
        },
        data: {
            defensa
        }
    })
    res.json(Defensa)
}

//Delete

const deleteDefensa = async (req, res) => {
    const { id } = req.params
    const Defensa = await prisma.Defensas.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(Defensa)
}


const DefensasController = {
    createDefensa,
    getDefensas,
    getDefensabyID,
    defensasReinos,
    updateDefensaDefensa,
    deleteDefensa
}

export default DefensasController