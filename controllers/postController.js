
// connessione db
const connection = require('../data/db');


const index = (req, res) => {

    const sql = 'SELECT * FROM POSTS';  //PREPARAZIONE QUERY

    // inizializzo la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Query al db non corretta' })
        res.json(results)
    })
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