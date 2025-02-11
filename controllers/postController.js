
// connessione db
const connection = require('../data/db');
const { post } = require('../routers/posts');


const index = (req, res) => {

    const sql = 'SELECT * FROM POSTS';  //PREPARAZIONE QUERY

    // inizializzo la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Query al db non corretta' })
        res.json(results);
    });
};

const show = (req, res) => {

    const id = req.params.id

    const sql = 'SELECT * FROM POSTS WHERE id=?';
    // const sqlTags = 'SELECT T.* FROM tags T JOIN post_tag ON tags.id = post_tag.post_id WHERE post_tag.tag_id = ?';    --BONUS--


    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Query al db non corretta' });
        if (results.length === 0) return res.status(404).json({ error: 'Posts not found' });
        console.log(results);
        const post = results[0];


        // // query tags -- BONUS --
        // connection.query(sqlTags, [id], (err, tagsResults) => {
        //     if (err) return res.status(500).json({ error: 'Query al db non riuscita' });
        //     post.tags = tagsResults
        //     res.json(post);
        // });


    });
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

    const sql = 'DELETE FROM POSTS WHERE id=?';

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Eliminazione non riuscita' });
        res.sendStatus(204)
    })
}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}