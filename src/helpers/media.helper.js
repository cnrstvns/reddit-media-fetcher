module.exports.find = function findMedia(posts) {
  return posts
    .filter((post) => post.data.url?.endsWith('jpg')
        || post.data.url?.endsWith('mp4')
        || post.data.url?.endsWith('gif')
        || post.data.url?.endsWith('png'))
    .map((post) => post.data.url);
};
