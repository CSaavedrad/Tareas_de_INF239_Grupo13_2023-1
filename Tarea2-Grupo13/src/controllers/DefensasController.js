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
    try{
        const defensas = await prisma.Defensas.findMany()
        res.json(defensas)
    }catch(error) {
        console.error(error);
        res.status(500).json({error: "error al ver las Defensas"});
    }
}

const getDefensabyID = async (req, res) => {
    try{
        const { id } = req.params
        const defensa = await prisma.Defensas.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(defensa)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "error al ver Defensa"});
    }
}

const defensasReinos = async (req, res) => {
    try{
        const { id } = req.params
        const defensa = await prisma.Defensas.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                reinos:{
                    select:{
                        id_reino: true
                    }
                }
            }
        })
        res.json(defensa)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "error al ver Defensa"});
    }
}

//Update

const updateDefensa = async (req, res) => {
    try{
        const { defensa } = req.body

        if(defensa == null){
            return res.status(402).json({ error: 'defensa debe tener algún valor' });
        } else if(typeof defensa != 'string'){
            return res.status(402).json({ error: 'defensa debe ser de tipo string' });
        } else if(defensa.length > 45){
            return res.status(402).json({ error: 'defensa no debe tener mas de 45 caracteres' });
        }

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
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "error al actualizar Defensa"});
    }
}

//Delete

const deleteDefensa = async (req, res) => {
    try{
        const { id } = req.params
        const Defensa = await prisma.Defensas.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(Defensa)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "error al eliminar Defensa"});
    }
}


const DefensasController = {
    createDefensa,
    getDefensas,
    getDefensabyID,
    defensasReinos,
    updateDefensa,
    deleteDefensa
}

export default DefensasController