//
//Users
//
app.Models.SkUser = Backbone.Model.extend({
    initialize: function() {
    }
});

//app.skuser = new SkUser('my name');
app.Collections.SkUserList = Backbone.Collection.extend({
    model: app.Models.SkUser
});


//
//Issues
//
app.Models.Issue = Backbone.Model.extend({
    initialize: function() {
    }
});

app.Collections.IssueList = Backbone.Collection.extend({
    model: app.Models.Issue
});



//
//Projects
//
app.Models.SkProject = Backbone.Model.extend({
    initialize: function() {
    }
});

//app.skproject = new SkProject('my name');
app.Collections.SkProjectList = Backbone.Collection.extend({
    model: app.Models.SkProject
});



