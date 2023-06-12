import prisma from '../prismaClient.js'

//Create

const createPersonaje_reino = async (req, res) => {
    try {
        const { id_personaje, id_reino, fecha_registro, es_gobernante } = req.body

        if(id_personaje == null){
            return res.status(400).json({ error: 'id_personaje debe tener algún valor' });
        } else if(typeof id_personaje != 'number'){
            return res.status(400).json({ error: 'id_personaje debe ser un número' });
        }

        if(id_reino == null){
            return res.status(400).json({ error: 'id_reino debe tener algún valor' });
        } else if(typeof id_reino != 'number'){
            return res.status(400).json({ error: 'id_reino debe ser un número' });
        }

        if(fecha_registro == null){
            return res.status(400).json({ error: 'fecha_registro debe tener algún valor' });
        } else if(typeof fecha_registro != 'string'){
            return res.status(400).json({ error: 'fecha_registro debe ser mandada como string' });
        } else if(!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(fecha_registro)){
            return res.status(400).json({ error: 'fecha_registro debe tener formato AAAA-MM-DDTHH:MM:SS' });
        }

        if(es_gobernante == null){
            return res.status(400).json({ error: 'es_gobernante debe tener algún valor' });
        } else if(typeof es_gobernante != 'boolean'){
            return res.status(400).json({ error: 'es_gobernante debe ser un booleano' });
        }

        const personaje_reino = await prisma.Personaje_habita_reino.create({
            data: {
                fecha_registro: new Date(fecha_registro + "+00:00"),
                es_gobernante,
                personaje: {
                    connect: {
                        id: id_personaje,
                    },
                },
                reino: {
                    connect: {
                        id: id_reino,
                    },
                }
            }
        })
        res.json(personaje_reino)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al crear la relación Persona_Reino'});
    }
}

//Read

const getPersonaje_reino = async (req , res) => {
    const personaje_reino = await prisma.Personaje_habita_reino.findMany()
    res.json(personaje_reino)
}

const getPersonaje_reinobyIds = async (req, res) => {
    const { id_personaje, id_reino } = req.params
    const personaje_reino = await prisma.Personaje_habita_reino.findUnique({
        where: {
            id_personaje_id_reino: {
                id_personaje: Number(id_personaje),
                id_reino: Number(id_reino)
            }
        }
    })
    res.json(personaje_reino)
}

//Update

const updatePersonaje_reino = async (req, res) => {
    const { id_personaje, id_reino } = req.params
    const { fecha_registro, es_gobernante } = req.body
    const personaje_reino = await prisma.Personaje_habita_reino.update({
        where: {
            id_personaje_id_reino: {
                id_personaje: Number(id_personaje),
                id_reino: Number(id_reino)
            }
        },
        data: {
            fecha_registro: new Date(fecha_registro + "+00:00"),
            es_gobernante
        }
    })
    res.json(personaje_reino)
}

//Delete

const deletePersonaje_reino = async (req, res) => {
    const { id_personaje, id_reino } = req.params
    const personaje_reino = await prisma.Personaje_habita_reino.delete({
        where: {
            id_personaje_id_reino: {
                id_personaje: Number(id_personaje),
                id_reino: Number(id_reino)
            }
        }
    })
    res.json(personaje_reino)
}

const Personaje_habita_reinoController = {
    createPersonaje_reino,
    getPersonaje_reino,
    getPersonaje_reinobyIds,
    updatePersonaje_reino,
    deletePersonaje_reino
}

export default Personaje_habita_reinoController