const Post = require('./schema'); // Adjust path as necessary
const User = require('../Models/user.model'); // Ensure path is correct
const signToken = require('../middlewares/auth.middleware')

const resolvers = {
  Query: {
    getPosts: async () => await Post.find().populate('author'),
    getPost: async (_, { id }) => await Post.findById(id).populate('author'),
  },
  Mutation: {
    register: async (_, {email, password}, {req}) => {
     const User = await User.create({email, password})
     const token = signToken(pathUser)
     return {token, user}
    }
    createPost: async (_, { title, content }, { req }) => {
      if (!req.user) throw new Error('You must be logged in to create a post');
      
      const newPost = new Post({ title, content, author: req.user.id });
      await newPost.save();

      return newPost;
    },
    deletePost: async (_, { id }, { req }) => {
      if (!req.user) throw new Error('You must be logged in to delete a post');

      const post = await Post.findById(id);
      if (!post) throw new Error('Post not found');
      if (post.author.toString() !== req.user.id) throw new Error('Not authorized to delete this post');

      await post.remove();
      return 'Post deleted successfully';
    }
  }
};

module.exports = { resolvers };
