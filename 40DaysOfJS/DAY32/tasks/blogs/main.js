import { getPosts, getUserPosts } from "./posts.js";
import userData from './user.js';

console.log(getPosts());

console.log(getUserPosts(userData.id));