import axios from 'axios';

//const '/api/posts/' = 'http://localhost:5000/api/posts/';

class PostService {
    // Get Posts
    
    static async getPosts() {
        const res = await axios.get('/api/posts/')
        try {
          const data = res.data
          return data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        } catch (err) {
          return err
        }
    }


//Create Post
static insertPost(carModel, carMaker, carYear, carTrim, carAv, carUser) {
    return axios.post('/api/posts/', {
        carModel,
        carMaker,
        carYear,
        carTrim,
        carAv,
        carUser
    });
}
//Delete Post
static deletePost(id) {
    return axios.delete(`${'/api/posts/'}${id}`)
}

static updatePost(id) {
    return axios.patch(`${'/api/posts/'}${id}`)
}

}

export default PostService;