/***
 * add skills js
 */

var scrolled = 0,
    skillName,
    skillRating,
    rowCounter = 0;
$(document).ready(function() {
	$('#toggleCheckBox').click(function() {
		$("#container div").each(function(index, element) {
			if ($(this).hasClass('evenRow')) {
				$(this).addClass('oddRow').removeClass('evenRow');
			} else {
				$(this).addClass('evenRow').removeClass('oddRow');
			}
		});
	});
	$('#addSkills').click(function() {
		rowCounter += 1;
		skillName = $("#skillName").val().toUpperCase();
		skillRating = $("#skillRating").val();
		if (skillName && skillRating) {
			if (rowCounter % 2 === 0) {
				$("#skillsContainer").append('<div><div class="evenRow  paddingContentType' + skillRating + '"><span>' + skillName + '</span></div><div  class="evenRating"><span>' + skillRating + '</span></div></div>');
			} else {
				$("#skillsContainer").append('<div><div class="oddRow  paddingContentType' + skillRating + '"><span>' + skillName + '</span></div><div  class="oddRating"><span>' + skillRating + '</span></div></div>');
			}
			$("#skillName").val("");
			$("#skillRating").val("");
		}
	});
	$('#pushToSkillTree').click(function() {
		//angular, backbone, ajax , xml ,css3
		var skillWords = $("#skillsArea").val().split(',');
		//console.log(skillWords);
		if (skillWords.length) {
			for (var i = 0; i < skillWords.length; i++) {
				rowCounter += 1;
				skillName = skillWords[i].toUpperCase();
				skillRating = 0;
				if (skillName) {
					if (rowCounter % 2 === 0) {
						$("#skillsContainer").append('<div><div class="evenRow  paddingContentType' + skillRating + '"><span>' + skillName + '</span></div><div  class="evenRating"><span>' + skillRating + '</span></div></div>');
					} else {
						$("#skillsContainer").append('<div><div class="oddRow  paddingContentType' + skillRating + '"><span>' + skillName + '</span></div><div  class="oddRating"><span>' + skillRating + '</span></div></div>');
					}
				}
			}
		}
	});
	$('textarea.expand').focus(function() {
		$(this).animate({
			height : "4em"
		}, 500);
	});

});
var skills_set = [{
	"value" : "Angular JS",
	"label" : "Angular"
}, {
	"value" : "BackBone",
	"label" : "BackBone"
}, {
	"value" : "Ember",
	"label" : "Ember"
}, {
	"value" : "Javascript",
	"label" : "Javascript"
}];

$("#skillName").autocomplete({
	source : skills_set,
	minLength : 1,
	messages : {
		noResults : '',
		results : function() {
		}
	}
});
