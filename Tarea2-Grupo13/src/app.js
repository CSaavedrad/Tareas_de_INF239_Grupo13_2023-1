import express from 'express';
import morgan from 'morgan';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
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