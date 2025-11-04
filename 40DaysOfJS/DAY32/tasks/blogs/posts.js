let posts = [
    {id:1, title: "Post 1", userId : 1},
    {id:2, title: "Post 2", userId : 2},
    {id:2, title: "Post 3", userId : 3}
];

function getPosts() {
    return posts;
}

function getUserPosts(userId) {
    return posts.filter(post => post.userId === userId);
}

export { getPosts, getUserPosts };