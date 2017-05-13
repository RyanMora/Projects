const FollowToggle = require('./follow_toggle');

$(function()){
  $("button.follow_toggle").each( (i, btn) => new FollowToggle(btn, {}) );
};
