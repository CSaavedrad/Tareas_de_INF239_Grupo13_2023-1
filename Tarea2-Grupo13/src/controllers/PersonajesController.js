import prisma from '../prismaClient.js'

//Create
const createPersonaje = async (req, res) => {
    const { nombre, fuerza, fecha_nacimiento, objeto } = req.body
    const personaje = await prisma.personaje.create({
        data: {
            nombre,
            fuerza,
            fecha_nacimiento,
            objeto
        }
    })
    res.json(personaje)
}



//Read
const getPersonajes = async (req, res) => {
    const personajes = await prisma.personaje.findMany()
    res.json(personajes)
}

const getPersonajesbyID = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.personaje.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personaje)
}

const getPersonajeKarts = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.personaje.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            karts: true
        }
    })
    res.json(personaje)
}


//Update

const updatePersonajeFuerza = async (req, res) => {
    const { fuerza } = req.body
    const { id } = req.params
    const personaje = await prisma.personaje.update({
        where: {
            id: Number(id)
        },
        data: {
            fuerza
        }
    })
    res.json(personaje)
}

const updatePersonajeObjeto = async (req, res) => {
    const { objeto } = req.body
    const { id } = req.params
    const personaje = await prisma.personaje.update({
        where: {
            id: Number(id)
        },
        data: {
            objeto
        }
    })
    res.json(personaje)
}

//Delete
const deletePersonaje = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.personaje.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(personaje)
}


const PersonajesController = {
    createPersonaje,
    getPersonajes,
    getPersonajesbyID,
    getPersonajeKarts,
    updatePersonajeFuerza,
    updatePersonajeObjeto,
    deletePersonaje
}

export default PersonajesController