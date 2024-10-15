
app.get("/api/concurrent/posts", async (req, res) => {
    let posts = [];
  
    // retrieve and filter all the tags from the URL
    const tags = getTags(req.query.tags);
  
    // make concurrent api calls
    const requests = tags.map((tag) =>
      axios.get("https://api.hatchways.io/assessment/blog/posts?tag=" + tag)
    );
  
    try {
      // wait until all the api calls resolves
      const result = await Promise.all(requests);
  
      // posts are ready. accumulate all the posts without duplicates
      result.map((item) => {
        posts = addNewPosts(posts, item.data.posts);
      });
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  
    return res.send({ posts: posts });
  });