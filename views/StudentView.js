var StudentView = Backbone.View.extend({
  template: Handlebars.compile( $("#student-template").html()),
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  render: function() {
    this.$el.html(this.template({
      url: student.get('url')
      // first1: student.first1,
      // last1: student.last1,
      // first2: student.first2,
      // last2: student.last2,
      // first3: student.first3,
      // last3: student.last4
    }));
  }
});
