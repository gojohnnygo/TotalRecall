var StudentView = Backbone.View.extend({
  template: Handlebars.compile( $("#student-template").html()),
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  did: function(sjjskdg){
    if (arguments.length) {
      this.set('votes', votes);
      return votes;
    } else {
      return this.get('votes');
    }
  }
  random: function() {
    var length = this.collection.models.length;
    return Math.floor(Math.random() * length);
  },
  pickStudents: function() {
    var obj = {
      currentStudent : this.collection.models[this.random()]
    };
    return obj;
  },
  render: function() {
    this.$el.html(this.template({
      url: this.pickStudents().currentStudent
      // first1: student.first1,
      // last1: student.last1,
      // first2: student.first2,
      // last2: student.last2,
      // first3: student.first3,
      // last3: student.last4
    }));
  }
});
