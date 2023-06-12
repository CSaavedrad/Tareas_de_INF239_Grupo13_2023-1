import prisma from '../prismaClient.js'

//Create

const createDiplomacia = async (req, res) => {
    try{
        const { id_reino1, id_reino2, es_aliado} = req.body

        if(id_reino1 == null){
            return res.status(400).json({ error: 'id_reino1 debe tener algún valor' });
        } else if(typeof id_reino1 != 'number'){
            return res.status(400).json({ error: 'id_reino1 debe ser un número' });
        }

        if(id_reino2 == null){
            return res.status(400).json({ error: 'id_reino2 debe tener algún valor' });
        } else if(typeof id_reino2 != 'number'){
            return res.status(400).json({ error: 'id_reino2 debe ser un número' });
        }

        if(es_aliado == null){
            return res.status(400).json({ error: 'es_aliado debe tener algún valor' });
        } else if(typeof es_aliado != 'boolean'){
            return res.status(400).json({ error: 'es_aliado debe ser un booleano' });
        }

        const Diplomacia = await prisma.Diplomacias.create({
            data: {
                es_aliado,
                reino1: {
                    connect: {
                        id: id_reino1,
                    },
                },
                reino2: {
                    connect: {
                        id: id_reino2,
                    },
                }
            }
        })
        res.json(Diplomacia)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al crear la relación Diplomacia'});
    }
}

//Read

const getDiplomacias = async (req , res) => {
    try{
        const diplomacias = await prisma.Diplomacias.findMany()
        res.json(diplomacias)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver las relaciones Diplomacia'});
    }
}

const getDiplomaciabyIds = async (req, res) => {
    try{
        const { id_reino1, id_reino2 } = req.params
        const diplomacia = await prisma.Diplomacias.findUnique({
            where: {
                id_reino1_id_reino2: {
                    id_reino1: Number(id_reino1),
                    id_reino2: Number(id_reino2)
                }
            }
        })
        res.json(diplomacia)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver la relacion Diplomacia'});
    }
}

//Update

const updateDiplomacia = async (req, res) => {
    try{
        const { id_reino1, id_reino2 } = req.params
        const { es_aliado } = req.body

        if(es_aliado == null){
            return res.status(400).json({ error: 'es_aliado debe tener algún valor' });
        } else if(typeof es_aliado != 'boolean'){
            return res.status(400).json({ error: 'es_aliado debe ser un booleano' });
        }

        const diplomacia = await prisma.Diplomacias.update({
            where: {
                id_reino1_id_reino2: {
                    id_reino1: Number(id_reino1),
                    id_reino2: Number(id_reino2)
                }
            },
            data: {
                es_aliado
            }
        })
        res.json(diplomacia)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar la relacion Diplomacia'});
    }
}

//Delete

const deleteDiplomacia = async (req, res) => {
    try {
        const { id_reino1, id_reino2 } = req.params
        const diplomacia = await prisma.Diplomacias.delete({
            where: {
                id_reino1_id_reino2: {
                    id_reino1: Number(id_reino1),
                    id_reino2: Number(id_reino2)
                }
            }
        })
        res.json(diplomacia)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al eliminar la relacion Diplomacia'});
    }
}

const DiplomaciasController = {
    createDiplomacia,
    getDiplomacias,
    getDiplomaciabyIds,
    updateDiplomacia,
    deleteDiplomacia
}

export default DiplomaciasController