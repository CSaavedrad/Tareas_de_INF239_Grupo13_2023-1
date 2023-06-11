import prisma from '../prismaClient.js'

//Create

const createDiplomacia = async (req, res) => {
    try{
        const { id_reino1, id_reino2, es_aliado} = req.body

        if(id_reino1 == null){
            return res.status(400).json({ error: 'id_reino1 debe tener algún valor' });
        } else if(typeof id_reino1 != 'number'){
            return res.status(400).json({ error: 'id_reino1 debe ser un numero' });
        }

        if(id_reino2 == null){
            return res.status(400).json({ error: 'id_reino2 debe tener algún valor' });
        } else if(typeof id_reino2 != 'number'){
            return res.status(400).json({ error: 'id_reino2 debe ser un numero' });
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
        res.status(500).json({error: 'Error al crear la relacion Diplomacia'});
    }
}

//Read

const getDiplomacias = async (req , res) => {
    const diplomacias = await prisma.Diplomacias.findMany()
    res.json(diplomacias)
}

const getDiplomaciabyIds = async (req, res) => {
    const { id_reino1, id_reino2 } = req.params
    const diplomacia = await prisma.Diplomacias.findMany({
        where: {
            id_reino1: id_reino1,
            id_reino2: id_reino2
        }
    })
    res.json(diplomacia)
}

//Update

const updateDiplomaciaes_aliado = async (req, res) => {
    const { id_reino1, id_reino2 } = req.params
    const { es_aliado } = req.body
    const diplomacia = await prisma.Diplomacias.update({
        where: {
            id_reino1: id_reino1,
            id_reino2: id_reino2
        },
        data: {
            es_aliado
        }
    })
    res.json(diplomacia)
}

//Delete

const deleteDiplomacia = async (req, res) => {
    const { id_reino1, id_reino2 } = req.params
    const diplomacia = await prisma.Diplomacias.delete({
        where: {
            id_reino1: id_reino1,
            id_reino2: id_reino2
        }
    })
    res.json(diplomacia)
}

const DiplomaciasController = {
    createDiplomacia,
    getDiplomacias,
    getDiplomaciabyIds,
    updateDiplomaciaes_aliado,
    deleteDiplomacia
}

export default DiplomaciasController