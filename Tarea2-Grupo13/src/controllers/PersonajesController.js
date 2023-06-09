import prisma from '../prismaClient.js'

//Create
const createPersonaje = async (req, res) => {
    try{
        const { nombre, fuerza, fecha_nacimiento, objeto } = req.body;
        
        if(nombre == null){
            return res.status(400).json({ error: 'nombre debe tener algún valor' });
        } else if(typeof nombre != 'string'){
            return res.status(400).json({ error: 'nombre debe ser de tipo string' });
        } else if(nombre.length > 45){
            return res.status(400).json({ error: 'nombre no debe tener mas de 45 caracteres' });
        }

        if(fuerza == null){
            return res.status(400).json({ error: 'fuerza debe tener algún valor' });
        } else if(typeof fuerza != 'number'){
            return res.status(400).json({ error: 'fuerza debe ser un número' });
        }

        if(fecha_nacimiento == null){
            return res.status(400).json({ error: 'fecha_nacimiento debe tener algún valor' });
        } else if(typeof fecha_nacimiento != 'string'){
            return res.status(400).json({ error: 'fecha_nacimiento debe ser mandada como string' });
        } else if(!/(\d{4}-\d{2}-\d{2}|\d{4}\/\d{2}\/\d{2})/.test(fecha_nacimiento)){
            return res.status(400).json({ error: 'fecha_nacimiento debe tener formato AAAA-MM-DD o AAAA/MM/DD' });
        }

        if(objeto != null){
            if(typeof objeto != 'string'){
                return res.status(400).json({ error: 'objeto debe ser de tipo string' });
            } else if(objeto.length > 30){
                return res.status(400).json({ error: 'objeto no debe tener mas de 30 caracteres' });
            } 
        }
        
        
        const personaje = await prisma.Personajes.create({
            data: {
                nombre,
                fuerza,
                fecha_nacimiento: new Date(fecha_nacimiento),
                objeto
            }
        });
        res.status(201).json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al crear el Personaje'});
    }
}



//Read
const getPersonajes = async (req, res) => {
    try{
        const personajes = await prisma.Personajes.findMany()
        res.json(personajes)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver los Personajes'});
    }
}

const getPersonajesbyID = async (req, res) => {
    try{
        const { id } = req.params
        const personaje = await prisma.Personajes.findUnique({
            where: {
                id: Number(id)
            }
        })
        res.json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver el Personaje'});
    }
}

const getPersonajeKarts = async (req, res) => {
    try{
        const { id } = req.params
        const personaje = await prisma.Personajes.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                karts: true
            }
        })
        res.json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver los karts del Personaje'});
    }
}

const getPersonajeTrabajos = async (req, res) => {
    try{
        const { id } = req.params
        const personaje = await prisma.Personajes.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                trabajos: true
            }
        })
        res.json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver los trabajos del Personaje'});
    }
}

const getPersonajeReinos = async (req, res) => {
    try{
        const { id } = req.params
        const personaje = await prisma.Personajes.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                reinos: true
            }
        })
        res.json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al ver los reinos del Personaje'});
    }
}

//Update

const updatePersonaje = async (req, res) => {
    try{
        const { id } = req.params
        const { nombre, fuerza, fecha_nacimiento, objeto } = req.body

        if(nombre == null){
            return res.status(400).json({ error: 'nombre debe tener algún valor' });
        } else if(typeof nombre != 'string'){
            return res.status(400).json({ error: 'nombre debe ser de tipo string' });
        } else if(nombre.length > 45){
            return res.status(400).json({ error: 'nombre no debe tener mas de 45 caracteres' });
        }

        if(fuerza == null){
            return res.status(400).json({ error: 'fuerza debe tener algún valor' });
        } else if(typeof fuerza != 'number'){
            return res.status(400).json({ error: 'fuerza debe ser un número' });
        }

        if(fecha_nacimiento == null){
            return res.status(400).json({ error: 'fecha_nacimiento debe tener algún valor' });
        } else if(typeof fecha_nacimiento != 'string'){
            return res.status(400).json({ error: 'fecha_nacimiento debe ser mandada como string' });
        } else if(!/(\d{4}-\d{2}-\d{2}|\d{4}\/\d{2}\/\d{2})/.test(fecha_nacimiento)){
            return res.status(400).json({ error: 'fecha_nacimiento debe tener formato AAAA-MM-DD o AAAA/MM/DD' });
        }

        if(objeto != null){
            if(typeof objeto != 'string'){
                return res.status(400).json({ error: 'objeto debe ser de tipo string' });
            } else if(objeto.length > 30){
                return res.status(400).json({ error: 'objeto no debe tener mas de 30 caracteres' });
            } 
        }

        const personaje = await prisma.Personajes.update({
            where: {
                id: Number(id)
            },
            data: {
                nombre,
                fuerza,
                fecha_nacimiento: new Date(fecha_nacimiento),
                objeto
            }
        })
        res.json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Personaje'});
    }
}

const updatePersonajeFuerza = async (req, res) => {
    try{
        const { fuerza } = req.body
        const { id } = req.params

        if(fuerza == null){
            return res.status(400).json({ error: 'fuerza debe tener algún valor' });
        } else if(typeof fuerza != 'number'){
            return res.status(400).json({ error: 'fuerza debe ser un número' });
        }

        const personaje = await prisma.Personajes.update({
            where: {
                id: Number(id)
            },
            data: {
                fuerza
            }
        })
        res.json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Personaje'});
    }
}

const updatePersonajeObjeto = async (req, res) => {
    try{
        const { objeto } = req.body
        const { id } = req.params

        if(objeto != null){
            if(typeof objeto != 'string'){
                return res.status(400).json({ error: 'objeto debe ser de tipo string' });
            } else if(objeto.length > 30){
                return res.status(400).json({ error: 'objeto no debe tener mas de 30 caracteres' });
            } 
        }
        
        const personaje = await prisma.Personajes.update({
            where: {
                id: Number(id)
            },
            data: {
                objeto
            }
        })
        res.json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al actualizar el Personaje'});
    }
}

//Delete
const deletePersonaje = async (req, res) => {
    try{
        const { id } = req.params
        const personaje = await prisma.Personajes.delete({
            where: {
                id: Number(id)
            }
        })
        res.json(personaje)
    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Error al eliminar el Personaje'});
    }
}


const PersonajesController = {
    createPersonaje,
    getPersonajes,
    getPersonajesbyID,
    getPersonajeKarts,
    getPersonajeTrabajos,
    getPersonajeReinos,
    updatePersonaje,
    updatePersonajeFuerza,
    updatePersonajeObjeto,
    deletePersonaje
}

export default PersonajesController