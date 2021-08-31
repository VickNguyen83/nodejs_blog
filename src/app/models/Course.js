const { request } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: {type:String, require: true,},
    desc: {type:String, maxlength:700},
    image: {type:String, maxlength:500},
    videoId:{type:String, require:true,},
    slug:{type:String, slug:'name', unique:true,},
    level:{type:String , maxlength:255},
   
  },{timestamps:true,});
  module.exports = mongoose.model('Course', Course);