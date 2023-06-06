import express from 'express';
import morgan from 'morgan';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)

//CRUD Personajes
app.post('/api/personajes', PersonajesController.createPersonaje)
app.get('/api/personajes', PersonajesController.getPersonajes)
app.get('/api/personajes/:id', PersonajesController.getPersonajesbyID)
app.get('/api/personajes/:id/karts', PersonajesController.getPersonajeKarts)
app.put('/api/personajes/:id/fuerza', PersonajesController.updatePersonajeFuerza)
app.put('/api/personajes/:id/objeto', PersonajesController.updatePersonajeObjeto)
app.delete('/api/personajes', PersonajesController.deletePersonaje)
//CRUD Karts
app.post('/api/karts', KartsController.createKart)
app.get('/api/karts', KartsController.getKarts)
app.get('/api/karts/:id', KartsController.getKartsbyID)
app.put('/api/karts/:id/color', KartsController.updateKartsColor)
app.put('/api/karts/:id/velocidad', KartsController.updateKartsVel)
app.put('/api/karts/:id/personaje', KartsController.updateKartsOwner)
app.delete('/api/karts', KartsController.deleteKart)
//CRUD Trabajos
app.post('/api/trabajos', TrabajosController.createTrabajo)
app.get('/api/trabajos', TrabajosController.getTrabajos)
app.get('/api/trabajos/:id', TrabajosController.getTrabajosbyID)
app.put('/api/trabajos/:id/sueldo', TrabajosController.updateTrabajoSueldo)
app.delete('/api/trabajos/:id', TrabajosController.deleteTrabajo)
//CRUD Reinos
app.post('/api/reinos', ReinosController.createReino)
app.get('/api/reinos', ReinosController.getReinos)
app.get('/api/reinos/:id', ReinosController.getReinobyId)
app.get('/api/reinos/:id', ReinosController.reinoDiplomacias)
app.put('/api/reinos/:id/superficie', ReinosController.updateReinoSuperficie)
app.delete('/api/reinos/:id', ReinosController.deleteReino)
//CRUD Diplomacias
app.post('/api/diplomacias', DiplomaciasController.createDiplomacia)
app.get('/api/diplomacias', DiplomaciasController.getDiplomacias)
app.get('/api/diplomacias/:id1/:id2', DiplomaciasController.getDiplomaciabyIds)
app.put('/api/diplomacias/:id1/:id2/es_aliado', DiplomaciasController.updateDiplomaciaes_aliado)
app.delete('/api/diplomacias/:id1/:id2', DiplomaciasController.deleteDiplomacia)
//CRUD Defensas
app.post('/api/defensas', DefensasController.createDefensa)
app.get('/api/defensas', DefensasController.getDefensas)
app.get('/api/defensas/:id', DefensasController.getDefensabyID)
app.get('/api/defensas/:id', DefensasController.defensasReinos)
app.put('/api/defensas/:id/defensa', DefensasController.updateDefensaDefensa)
app.delete('/api/defensas/:id', DefensasController.deleteDefensa)
//CRUD Reino_tiene_defensa
app.post('/api/reino_tiene_defensa', Reino_tiene_defensaController.createReino_Defensa)
app.get('/api/reino_tiene_defensa', Reino_tiene_defensaController.getReinos_Defensas)
app.get('/api/reino_tiene_defensa/:id', Reino_tiene_defensaController.getReino_DefensabyId)
app.delete('/api/reino_tiene_defensa/:id', Reino_tiene_defensaController.deleteReino_Defensa)
//CRUD Personaje_habita_reino
app.post('/api/personaje_habita_reino', Personaje_habita_reinoController.createPersonaje_reino)
app.get('/api/personaje_habita_reino', Personaje_habita_reinoController.getPersonaje_reino)
app.get('/api/personaje_habita_reino/:id', Personaje_habita_reinoController.getPersonaje_reinobyIds)
app.put('/api/personaje_habita_reino/:id', Personaje_habita_reinoController.updatePersonaje_reinoes_gobernante)
app.get('/api/personaje_habita_reino/:id', Personaje_habita_reinoController.getPersonaje_reinobyIds)
//CRUD Personaje_tiene_trabajo
app.post('/api/personaje_tiene_trabajo', Personaje_tiene_trabajoController.createPersonaje_Trabajo)
app.get('/api/personaje_tiene_trabajo', Personaje_tiene_trabajoController.getPersonaje_Trabajo)
app.get('/api/personaje_tiene_trabajo/:id', Personaje_tiene_trabajoController.getPersonaje_TrabajobyId)
app.put('/api/personaje_tiene_trabajo/:id', Personaje_tiene_trabajoController.updatePersonaje_Trabajotermino)
app.delete('/api/personaje_tiene_trabajo/:id', Personaje_tiene_trabajoController.deletePersonaje_Trabajo)


//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})