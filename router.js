Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('postPage', {
    path: '/',
    data: function() {
      return Posts.findOne();
    }
  });
});
