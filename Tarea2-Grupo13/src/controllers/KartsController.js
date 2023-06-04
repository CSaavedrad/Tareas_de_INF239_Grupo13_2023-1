import prisma from '../prismaClient.js'

//Create
const createKart = async (req, res) => {
    const { modelo, color, velocidadmax, id_personaje } = req.body
    const karts = await prisma.karts.create({
        data: {
            modelo,
            color,
            velocidadmax,
            id_personaje
        }
    })
    res.json(karts)
}



//Read
const getKarts = async (req, res) => {
    const karts = await prisma.karts.findMany()
    res.json(karts)
}

const getKartsbyID = async (req, res) => {
    const { id } = req.params
    const kart = await prisma.karts.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(kart)
}

//Update
const updateKartsColor = async (req, res) => {
    const { color } = req.body
    const { id } = req.params
    const kart = await prisma.karts.update({
        where: {
            id: Number(id)
        },
        data: {
            color
        }
    })
    res.json(kart)
}

const updateKartsVel = async (req, res) => {
    const { velocidadmax } = req.body
    const { id } = req.params
    const kart = await prisma.karts.update({
        where: {
            id: Number(id)
        },
        data: {
            velocidadmax
        }
    })
    res.json(kart)
}

const updateKartsOwner = async (req, res) => {
    const { id_personaje } = req.body
    const { id } = req.params
    const kart = await prisma.karts.update({
        where: {
            id: Number(id)
        },
        data: {
            id_personaje
        }
    })
    res.json(kart)
}

//Delete
const deleteKart = async (req, res) => {
    const { id } = req.params
    const kart = await prisma.karts.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(kart)
}


const KartsController = {
    createKart,
    getKarts,
    getKartsbyID,
    updateKartsColor,
    updateKartsVel,
    updateKartsOwner,
    deleteKart
}

export default KartsController