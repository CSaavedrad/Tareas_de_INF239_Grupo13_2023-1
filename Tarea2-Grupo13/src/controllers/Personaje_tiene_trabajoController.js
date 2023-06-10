import prisma from "../prismaClient.js"

//Create

const createPersonaje_Trabajo = async (req, res) => {
    const { id_personaje , id_trabajo , fecha_inicio , fecha_termino } = req.body
    const Personaje_Trabajo = await prisma.Personaje_tiene_trabajo.create({
        data: {
            personaje: {
                connect: {
                    id: id_personaje,
                },
            },
            trabajo: {
                connect: {
                    id: id_trabajo,
                },
            },
            fecha_inicio: new Date(fecha_inicio),
            fecha_termino: new Date(fecha_termino)
        }
    })
    res.json(Personaje_Trabajo)
}

//Read

const getPersonaje_Trabajo = async (req, res) => {
    const Personajes_tienen_trabajos = await prisma.Personaje_tiene_trabajo.findMany()
    res.json(Personajes_tienen_trabajos)
}

const getPersonaje_TrabajobyId = async (req, res) => {
    const { id_personaje, id_trabajo } = req.params
    const personaje = await prisma.Personaje_tiene_trabajo.findMany({
        where: {
            id_personaje: Number(id_personaje),
            id_trabajo: Number(id_trabajo)
        }
    })
    res.json(personaje)
} 

//Update

const updatePersonaje_Trabajotermino = async (req, res) => {
    const { fecha_termino } = req.body
    const { id } = req.params
    const Personaje_Trabajo = await prisma.Personaje_tiene_trabajo.update({
        where: {
            id: Number(id)
        },
        data: {
            fecha_termino
        }
    })
    res.json(Personaje_Trabajo)
}

//Delete

const deletePersonaje_Trabajo= async (req, res) => {
    const { id } = req.params
    const Personaje_Trabajo = await prisma.Personaje_tiene_trabajo.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(Personaje_Trabajo)
}

const Personaje_tiene_trabajoController = {
    createPersonaje_Trabajo,
    getPersonaje_Trabajo,
    getPersonaje_TrabajobyId,
    updatePersonaje_Trabajotermino,
    deletePersonaje_Trabajo
}

export default Personaje_tiene_trabajoController