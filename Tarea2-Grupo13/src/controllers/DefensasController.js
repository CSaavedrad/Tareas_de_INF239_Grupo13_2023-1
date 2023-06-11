import prisma from '../prismaClient.js'

//Create

const createDefensa = async (req, res) => {
    try{
        const { defensa } = req.body

        if(defensa == null){
            return res.status(402).json({ error: 'defensa debe tener algún valor' });
        } else if(typeof defensa != 'string'){
            return res.status(402).json({ error: 'defensa debe ser de tipo string' });
        } else if(defensa.length > 45){
            return res.status(402).json({ error: 'defensa no debe tener mas de 45 caracteres' });
        }

        const Defensa = await prisma.Defensas.create({
            data: {
                defensa
            }
        })
        res.json(Defensa)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "error al crear Defensa"});
    }
}

//Read

const getDefensas = async (req, res) => {
    const defensas = await prisma.Defensas.findMany()
    res.json(defensas)
}

const getDefensabyID = async (req, res) => {
    const { id } = req.params
    const defensa = await prisma.Defensas.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(defensa)
}

const defensasReinos = async (req, res) => {
    const { id } = req.params
    const defensa = await prisma.Defensas.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            reinos: true
        }
    })
    res.json(defensa)
}

//Update

const updateDefensaDefensa = async (req, res) => {
    const { defensa } = req.body
    const { id } = req.params
    const Defensa = await prisma.Defensas.update({
        where: {
            id: Number(id)
        },
        data: {
            defensa
        }
    })
    res.json(Defensa)
}

//Delete

const deleteDefensa = async (req, res) => {
    const { id } = req.params
    const Defensa = await prisma.Defensas.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(Defensa)
}


const DefensasController = {
    createDefensa,
    getDefensas,
    getDefensabyID,
    defensasReinos,
    updateDefensaDefensa,
    deleteDefensa
}

export default DefensasController