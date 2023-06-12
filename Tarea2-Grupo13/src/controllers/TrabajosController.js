import prisma from '../prismaClient.js'

//Create
const createTrabajo = async (req, res) => {
    try{
        const { descripcion, sueldo } = req.body

        if(descripcion != null){
            if(typeof descripcion != 'string'){
                return res.status(404).json({ error: 'descripcion debe ser de tipo string' });
            } else if(descripcion.length > 45){
                return res.status(404).json({ error: 'descripcion no debe tener mas de 45 caracteres' });
            }
        }

        if(sueldo == null){
            return res.status(404).json({ error: 'sueldo debe tener algún valor' });
        } else if(typeof sueldo != 'number'){
            return res.status(404).json({ error: 'sueldo debe ser un número' });
        }

        const trabajo = await prisma.Trabajos.create({
            data: {
                descripcion,
                sueldo
            }
        })
        res.json(trabajo)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al crear el Trabajo'});
    }
}



//Read
const getTrabajos = async (req, res) => {
    try{
        const trabajos = await prisma.Trabajos.findMany()
        res.json(trabajos)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver los Trabajos'});
    }
}

const getTrabajosbyID = async (req, res) => {
    try{
        const { id } = req.params
        const trabajo = await prisma.Trabajos.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(trabajo)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver el Trabajo'});
    }
}

//Update

const updateTrabajo = async (req, res) => {
    try{
        const { descripcion, sueldo } = req.body
        const { id } = req.params

        if(descripcion != null){
            if(typeof descripcion != 'string'){
                return res.status(404).json({ error: 'descripcion debe ser de tipo string' });
            } else if(descripcion.length > 45){
                return res.status(404).json({ error: 'descripcion no debe tener mas de 45 caracteres' });
            }
        }

        if(sueldo == null){
            return res.status(404).json({ error: 'sueldo debe tener algún valor' });
        } else if(typeof sueldo != 'number'){
            return res.status(404).json({ error: 'sueldo debe ser un número' });
        }

        const trabajo = await prisma.Trabajos.update({
            where: {
                id: Number(id)
            },
            data: {
                descripcion,
                sueldo
            }
        })
        res.json(trabajo)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Trabajo'});
    }
}

const updateTrabajoSueldo = async (req, res) => {
    try{
        const { sueldo } = req.body
        const { id } = req.params

        if(sueldo == null){
            return res.status(404).json({ error: 'sueldo debe tener algún valor' });
        } else if(typeof sueldo != 'number'){
            return res.status(404).json({ error: 'sueldo debe ser un número' });
        }
        
        const trabajo = await prisma.Trabajos.update({
            where: {
                id: Number(id)
            },
            data: {
                sueldo
            }
        })
        res.json(trabajo)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Trabajo'});
    }
}

//Delete
const deleteTrabajo = async (req, res) => {
    try{
        const { id } = req.params
        const trabajo = await prisma.Trabajos.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(trabajo)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al eliminar el Trabajo'});
    }
}


const TrabajosController = {
    createTrabajo,
    getTrabajos,
    getTrabajosbyID,
    updateTrabajo,
    updateTrabajoSueldo,
    deleteTrabajo
}

export default TrabajosController