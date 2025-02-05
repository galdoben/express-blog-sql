
// connessione db
const connection = require('../data/db');


const index = (req, res) => {
    res.send('Server dei posts');
}

const show = (req, res) => {
    const id = req.params.id
    res.send(`Dettaglio posts ${id}`);
}

const store = (req, res) => {
    res.send('Creazione posts');
}

const update = (req, res) => {
    const id = req.params.id;
    res.send(`Modifica posts ${id}`);
}

const modify = (req, res) => {
    const id = req.params.id
    res.send(`Modifica posts ${id}`);
}
const destroy = (req, res) => {
    const id = req.params.id
    res.send(`Elimina posts ${id}`);
}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}