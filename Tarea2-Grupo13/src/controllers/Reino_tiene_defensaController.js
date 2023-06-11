import prisma from '../prismaClient.js'

//Create

const createReino_Defensa = async (req, res) => {
    try{
        const { id_reino, id_defensa} = req.body

        if(id_reino == null){
            return res.status(400).json({ error: 'id_reino debe tener algún valor' });
        } else if(typeof id_reino != 'number'){
            return res.status(400).json({ error: 'id_reino debe ser un numero' });
        }

        if(id_defensa == null){
            return res.status(400).json({ error: 'id_defensa debe tener algún valor' });
        } else if(typeof id_defensa != 'number'){
            return res.status(400).json({ error: 'id_defensa debe ser un numero' });
        }


        const reino_defensa = await prisma.Reino_tiene_defensa.create({
            data: {
                reino: {
                    connect: {
                        id: id_reino,
                    },
                },
                defensa: {
                    connect: {
                        id: id_defensa,
                    },
                }
            }
        })
        res.json(reino_defensa)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al crear la relacion Reino_Defensa'});
    }
}

//Read

const getReinos_Defensas = async (req , res) => {
    const Reinos_tienen_defensas = await prisma.Reino_tiene_defensa.findMany()
    res.json(Reinos_tienen_defensas)
}

const getReino_DefensabyId = async (req, res) => {
    const { id_reino, id_defensa } = req.params
    const reino_defensa = await prisma.Reinos.findUnique({
        where: {
            id_reino: Number(id_reino),
            id_defensa: Number(id_defensa)
        }
    })
    res.json(reino_defensa)
}

//Delete

const deleteReino_Defensa = async (req, res) => {
    const { id } = req.params
    const reino_defensa = await prisma.Reino_tiene_defensa.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(reino_defensa)
}

const Reino_tiene_defensaController = {
    createReino_Defensa,
    getReinos_Defensas,
    getReino_DefensabyId,
    deleteReino_Defensa
}

export default Reino_tiene_defensaController