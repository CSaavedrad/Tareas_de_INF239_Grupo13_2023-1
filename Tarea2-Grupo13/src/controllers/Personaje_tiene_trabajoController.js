import prisma from "../prismaClient.js"

//Create

const createPersonaje_Trabajo = async (req, res) => {
    try{
        const { id_personaje , id_trabajo , fecha_inicio , fecha_termino } = req.body

        if(id_personaje == null){
            return res.status(400).json({ error: 'id_personaje debe tener algún valor' });
        } else if(typeof id_personaje != 'number'){
            return res.status(400).json({ error: 'id_personaje debe ser un número' });
        }

        if(id_trabajo == null){
            return res.status(400).json({ error: 'id_trabajo debe tener algún valor' });
        } else if(typeof id_trabajo != 'number'){
            return res.status(400).json({ error: 'id_trabajo debe ser un número' });
        }

        if(fecha_inicio == null){
            return res.status(400).json({ error: 'fecha_inicio debe tener algún valor' });
        } else if(typeof fecha_inicio != 'string'){
            return res.status(400).json({ error: 'fecha_inicio debe ser mandada como string' });
        } else if(!/(\d{4}-\d{2}-\d{2}|\d{4}\/\d{2}\/\d{2})/.test(fecha_inicio)){
            return res.status(400).json({ error: 'fecha_inicio debe tener formato AAAA-MM-DD o AAAA/MM/DD' });
        }

        if(fecha_termino != null){
            if(typeof fecha_termino != 'string'){
                return res.status(400).json({ error: 'fecha_termino debe ser mandada como string' });
            } else if(!/(\d{4}-\d{2}-\d{2}|\d{4}\/\d{2}\/\d{2})/.test(fecha_termino)){
                return res.status(400).json({ error: 'fecha_termino debe tener formato AAAA-MM-DD o AAAA/MM/DD' });
            }
        }

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
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al crear la relación Persona_Trabajo'});
    }
}

//Read

const getPersonaje_Trabajo = async (req, res) => {
    const Personajes_tienen_trabajos = await prisma.Personaje_tiene_trabajo.findMany()
    res.json(Personajes_tienen_trabajos)
}

const getPersonaje_TrabajobyId = async (req, res) => {
    const { id_personaje, id_trabajo } = req.params
    const Personaje_Trabajo = await prisma.Personaje_tiene_trabajo.findUnique({
        where: {
            id_personaje_id_trabajo: {
                id_personaje: Number(id_personaje),
                id_trabajo: Number(id_trabajo)
            }
        }
    })
    res.json(Personaje_Trabajo)
} 

//Update

const updatePersonaje_Trabajo = async (req, res) => {
    const { fecha_inicio , fecha_termino } = req.body
    const { id_personaje, id_trabajo } = req.params
    const Personaje_Trabajo = await prisma.Personaje_tiene_trabajo.update({
        where: {
            id_personaje_id_trabajo: {
                id_personaje: Number(id_personaje),
                id_trabajo: Number(id_trabajo)
            }
        },
        data: {
            fecha_inicio: new Date(fecha_inicio),
            fecha_termino: new Date(fecha_termino)
        }
    })
    res.json(Personaje_Trabajo)
}

const updatePersonaje_Trabajotermino = async (req, res) => {
    const { fecha_termino } = req.body
    const { id_personaje, id_trabajo } = req.params
    const Personaje_Trabajo = await prisma.Personaje_tiene_trabajo.update({
        where: {
            id_personaje_id_trabajo: {
                id_personaje: Number(id_personaje),
                id_trabajo: Number(id_trabajo)
            }
        },
        data: {
            fecha_termino: new Date(fecha_termino)
        }
    })
    res.json(Personaje_Trabajo)
}

//Delete

const deletePersonaje_Trabajo = async (req, res) => {
    const { id_personaje, id_trabajo } = req.params
    const Personaje_Trabajo = await prisma.Personaje_tiene_trabajo.delete({
        where: {
            id_personaje_id_trabajo: {
                id_personaje: Number(id_personaje),
                id_trabajo: Number(id_trabajo)
            }
        }
    })
    res.json(Personaje_Trabajo)
}

const Personaje_tiene_trabajoController = {
    createPersonaje_Trabajo,
    getPersonaje_Trabajo,
    getPersonaje_TrabajobyId,
    updatePersonaje_Trabajo,
    updatePersonaje_Trabajotermino,
    deletePersonaje_Trabajo
}

export default Personaje_tiene_trabajoController