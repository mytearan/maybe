// module.exports = {
//     mongoURI: "mongodb://localhost:27017/PepsiCoke",
//     secret: 'yoursecret'
// };
if (process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: "mongodb+srv://dbuser:dbuser@carrental.gaoog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/PepsiCoke",
        secret: 'yoursecret'
    };
}