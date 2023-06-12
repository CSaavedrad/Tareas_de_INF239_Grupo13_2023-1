import prisma from '../prismaClient.js'

//Create
const createKart = async (req, res) => {
    try{
        const { modelo, color, velocidad_maxima, id_personaje } = req.body

        if(modelo == null){
            return res.status(401).json({ error: 'modelo debe tener algún valor' });
        } else if(typeof modelo != 'string'){
            return res.status(401).json({ error: 'modelo debe ser de tipo string' });
        } else if(modelo.length > 45){
            return res.status(401).json({ error: 'modelo no debe tener mas de 45 caracteres' });
        }

        if(color == null){
            return res.status(401).json({ error: 'color debe tener algún valor' });
        } else if(typeof color != 'string'){
            return res.status(401).json({ error: 'color debe ser de tipo string' });
        } else if(color.length > 45){
            return res.status(401).json({ error: 'color no debe tener mas de 45 caracteres' });
        }
        if(velocidad_maxima != null){
            if(typeof velocidad_maxima != 'number'){
                return res.status(401).json({ error: 'velocidad_maxima debe ser un número' });
            }
        }

        if(id_personaje != null){
            if(typeof id_personaje != 'number'){
                return res.status(401).json({ error: 'id_personaje debe ser un número' });
            }
        }


        const karts = await prisma.Karts.create({
            data: {
                modelo,
                color,
                velocidad_maxima,
                id_personaje
            }
        });
        res.json(karts)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al crear el Kart'});
    }
}



//Read
const getKarts = async (req, res) => {
    try{
        const karts = await prisma.Karts.findMany()
        res.json(karts)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver los Karts'});
    }
}

const getKartsbyID = async (req, res) => {
    try{
        const { id } = req.params
        const kart = await prisma.Karts.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(kart)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver el Kart'});
    }
}

//Update

const updateKarts = async (req, res) => {
    try{
        const { id } = req.params
        const { modelo, color, velocidad_maxima, id_personaje } = req.body

        if(modelo == null){
            return res.status(401).json({ error: 'modelo debe tener algún valor' });
        } else if(typeof modelo != 'string'){
            return res.status(401).json({ error: 'modelo debe ser de tipo string' });
        } else if(modelo.length > 45){
            return res.status(401).json({ error: 'modelo no debe tener mas de 45 caracteres' });
        }

        if(color == null){
            return res.status(401).json({ error: 'color debe tener algún valor' });
        } else if(typeof color != 'string'){
            return res.status(401).json({ error: 'color debe ser de tipo string' });
        } else if(color.length > 45){
            return res.status(401).json({ error: 'color no debe tener mas de 45 caracteres' });
        }

        if(velocidad_maxima != null){
            if(typeof velocidad_maxima != 'number'){
                return res.status(401).json({ error: 'velocidad_maxima debe ser un número' });
            }
        }

        if(id_personaje != null){
            if(typeof id_personaje != 'number'){
                return res.status(401).json({ error: 'id_personaje debe ser un número' });
            }
        }

        const kart = await prisma.Karts.update({
            where: {
                id: Number(id)
            },
            data: {
                modelo,
                color,
                velocidad_maxima,
                id_personaje
            }
        })
        res.json(kart)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Kart'});
    }
}

const updateKartsColor = async (req, res) => {
    try{
        const { color } = req.body

        if(color == null){
            return res.status(401).json({ error: 'color debe tener algún valor' });
        } else if(typeof color != 'string'){
            return res.status(401).json({ error: 'color debe ser de tipo string' });
        } else if(color.length > 45){
            return res.status(401).json({ error: 'color no debe tener mas de 45 caracteres' });
        }

        const { id } = req.params
        const kart = await prisma.Karts.update({
            where: {
                id: Number(id)
            },
            data: {
                color
            }
        })
        res.json(kart)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Kart'});
    }
}

const updateKartsVel = async (req, res) => {
    try{
        const { velocidad_maxima } = req.body

        if(velocidad_maxima != null){
            if(typeof velocidad_maxima != 'number'){
                return res.status(401).json({ error: 'velocidad_maxima debe ser un número' });
            }
        }

        const { id } = req.params
        const kart = await prisma.Karts.update({
            where: {
                id: Number(id)
            },
            data: {
                velocidad_maxima
            }
        })
        res.json(kart)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Kart'});
    }
}

const updateKartsOwner = async (req, res) => {
    try{
        const { id_personaje } = req.body

        if(id_personaje != null){
            if(typeof id_personaje != 'number'){
                return res.status(401).json({ error: 'id_personaje debe ser un número' });
            }
        }

        const { id } = req.params
        const kart = await prisma.Karts.update({
            where: {
                id: Number(id)
            },
            data: {
                id_personaje
            }
        })
        res.json(kart)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Kart'});
    }
}

//Delete
const deleteKart = async (req, res) => {
    try{
        const { id } = req.params
        const kart = await prisma.Karts.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(kart)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al eliminar el Kart'});
    }
}


const KartsController = {
    createKart,
    getKarts,
    getKartsbyID,
    updateKarts,
    updateKartsColor,
    updateKartsVel,
    updateKartsOwner,
    deleteKart
}

export default KartsController