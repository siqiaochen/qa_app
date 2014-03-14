var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = new Schema({
	created_by : {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
	reply_to :  {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
	content : String,
	updated_at : Date,
	votes :  { type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Vote'}], index: {unique: true, dropDups: true} },
	thread_id : {type: mongoose.Schema.Types.ObjectId, ref: 'Thread'}
});

var Thread = new Schema({
	created_by : {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
	title : String,
	content : String,
	updated_at : Date,
	tags : { type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}], index: true } // field level
});

var Tag = new Schema({
	name : String,
	comment : String,
	managed : Boolean,
	manager_id : {type: mongoose.Schema.Types.ObjectId, ref: 'Account'}
});

var Vote = new Schema({
	voted_by :  {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
	postive : Boolean,
	updated_at : Date
});

mongoose.model('Post', Post);
mongoose.model('Vote', Vote);
mongoose.model('Thread', Thread);
mongoose.model('Tag', Tag);