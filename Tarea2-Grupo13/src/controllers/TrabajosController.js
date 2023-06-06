import prisma from '../prismaClient.js'

//Create
const createTrabajo = async (req, res) => {
    const { descripcion, sueldo } = req.body
    const trabajo = await prisma.Trabajos.create({
        data: {
            descripcion,
            sueldo
        }
    })
    res.json(trabajo)
}



//Read
const getTrabajos = async (req, res) => {
    const trabajos = await prisma.Trabajos.findMany()
    res.json(trabajos)
}

const getTrabajosbyID = async (req, res) => {
    const { id } = req.params
    const trabajo = await prisma.Trabajos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajo)
}

//Update
const updateTrabajoSueldo = async (req, res) => {
    const { sueldo } = req.body
    const { id } = req.params
    const trabajo = await prisma.Trabajos.update({
        where: {
            id: Number(id)
        },
        data: {
            sueldo
        }
    })
    res.json(trabajo)
}

//Delete
const deleteTrabajo = async (req, res) => {
    const { id } = req.params
    const trabajo = await prisma.Trabajos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajo)
}


const TrabajosController = {
    createTrabajo,
    getTrabajos,
    getTrabajosbyID,
    updateTrabajoSueldo,
    deleteTrabajo
}

export default TrabajosController