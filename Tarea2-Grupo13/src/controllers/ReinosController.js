import prisma from '../prismaClient.js'

// Create

const createReino = async (req, res) => {
    try{
        const { nombre, ubicacion, superficie } = req.body

        if(nombre == null){
            return res.status(403).json({ error: 'nombre debe tener algún valor' });
        } else if(typeof nombre != 'string'){
            return res.status(403).json({ error: 'nombre debe ser de tipo string' });
        } else if(nombre.length > 45){
            return res.status(403).json({ error: 'nombre no debe tener mas de 45 caracteres' });
        }

        if(ubicacion == null){
            return res.status(403).json({ error: 'ubicacion debe tener algún valor' });
        } else if(typeof ubicacion != 'string'){
            return res.status(403).json({ error: 'ubicacion debe ser de tipo string' });
        } else if(ubicacion.length > 45){
            return res.status(403).json({ error: 'ubicacion no debe tener mas de 45 caracteres' });
        } 

        if(superficie == null){
            return res.status(403).json({ error: 'superficie debe tener algún valor' });
        } else if(typeof superficie != 'number'){
            return res.status(403).json({ error: 'superficie debe ser un número' });
        }


        const reino = await prisma.Reinos.create({
            data: {
                nombre,
                ubicacion,
                superficie
            }
        });
        res.json(reino)
    } catch(error) {
        console.error(error);
        res.status(500).json({error: 'Error al crear el Reino'});
    }
}

// Read

const getReinos = async (req , res) => {
    const reinos = await prisma.Reinos.findMany()
    res.json(reinos)
}

const getReinobyId = async (req, res) => {
    const { id } = req.params
    const reino = await prisma.Reinos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(reino)
}

const reinoDiplomacias = async (req, res) => {
    const { id } = req.params
    const reino = await prisma.Reinos.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            diplomacia: true
        }
    })
    res.json(reino)
}

//Update

const updateReino = async (req, res) => {
    const { id } = req.params
    const { nombre, ubicacion, superficie } = req.body
    const reino = await prisma.Reinos.update({
        where: {
            id: Number(id)
        },
        data: {
            nombre,
            ubicacion,
            superficie
        }
    })
    res.json(reino)
}

const updateReinoSuperficie = async (req, res) => {
    const { id } = req.params
    const { superficie } = req.body
    const reino = await prisma.Reinos.update({
        where: {
            id: Number(id)
        },
        data: {
            superficie
        }
    })
    res.json(reino)
}

//Delete

const deleteReino = async (req, res) => {
    const { id } = req.params
    const reino = await prisma.Reinos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(reino)
}


const ReinosController = {
    createReino,
    getReinos,
    getReinobyId,
    reinoDiplomacias,
    updateReino,
    updateReinoSuperficie,
    deleteReino
}

export default ReinosController