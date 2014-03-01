if (Meteor.isClient) {
  Template.postPage.helpers({
    post: function() {
      return Posts.findOne();
    }
  });

  Template.postMain.helpers({
    greeting: function() {
      return this.body;
    }
  });

  Template.postMeta.helpers({
    postDate: function() {
      console.log(this);
      date = this.submitted;
    }
  });
}

Posts = new Meteor.Collection('posts');
