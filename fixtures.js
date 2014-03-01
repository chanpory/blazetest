if (Posts.find().count() === 0) {
  var body = "Hello world";
  Posts.insert({
    body: body,
    dateSubmitted: new Date().getTime()
  });
}
