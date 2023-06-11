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
            return res.status(400).json({ error: 'fuerza debe ser un numero' });
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
        //console.error(error);
        res.status(500).json({error: 'Error al crear el Personaje'});
    }
}



//Read
const getPersonajes = async (req, res) => {
    const personajes = await prisma.Personajes.findMany()
    res.json(personajes)
}

const getPersonajesbyID = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.Personajes.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personaje)
}

const getPersonajeKarts = async (req, res) => {
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
}


//Update

const updatePersonajeFuerza = async (req, res) => {
    const { fuerza } = req.body
    const { id } = req.params
    const personaje = await prisma.Personajes.update({
        where: {
            id: Number(id)
        },
        data: {
            fuerza
        }
    })
    res.json(personaje)
}

const updatePersonajeObjeto = async (req, res) => {
    const { objeto } = req.body
    const { id } = req.params
    const personaje = await prisma.Personajes.update({
        where: {
            id: Number(id)
        },
        data: {
            objeto
        }
    })
    res.json(personaje)
}

//Delete
const deletePersonaje = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.Personajes.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(personaje)
}


const PersonajesController = {
    createPersonaje,
    getPersonajes,
    getPersonajesbyID,
    getPersonajeKarts,
    updatePersonajeFuerza,
    updatePersonajeObjeto,
    deletePersonaje
}

export default PersonajesController