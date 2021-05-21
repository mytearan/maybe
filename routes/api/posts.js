const express = require('express');
const mongodb = require('mongodb');
//const User = require('../../model/User');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        carModel: req.body.carModel,
        carMaker: req.body.carMaker,
        carYear: req.body.carYear,
        carTrim: req.body.carTrim,
        carAv: req.body.carAv,
        createdAt: new Date()
    });
    res.status(201).send();
});


//Delete Post

router.delete('/:id', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

// Update Post
router.patch('/:id', async (req, res) => {

        try {
            const posts = await loadPostCollection();
                posts.updateOne({_id: new mongodb.ObjectID(req.params.id)}, {$set: { carAv: 'no' }})
                res.status(201).send();
        } catch {
            res.status(404)
        
            res.send({ error: "Post doesn't exist!" })
        }
});


async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://dbuser:dbuser@carrental.gaoog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
    useNewUrlParser: true
},
{
    useUnifiedTopology: true 
}
);

return client.db('carRental').collection('posts');
};

module.exports = router;