import prisma from '../prismaClient.js'

//Create
const createPersonaje = async (req, res) => {
    const { nombre, fuerza, fecha_nacimiento, objeto } = req.body
    const personaje = await prisma.Personajes.create({
        data: {
            nombre,
            fuerza,
            fecha_nacimiento: new Date(fecha_nacimiento),
            objeto
        }
    })
    res.json(personaje)
}



//Read
const getPersonajes = async (req, res) => {
    const personajes = await prisma.Personajes.findMany()
    res.json(personajes)
}

const getPersonajesbyID = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.Personajes.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personaje)
}

const getPersonajeKarts = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.Personajes.findUnique({
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
    const personaje = await prisma.Personajes.update({
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
    const personaje = await prisma.Personajes.update({
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
    const personaje = await prisma.Personajes.delete({
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