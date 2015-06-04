var bio = {
	name: "Jason D. Girard",
	role: "Front-End Web Developer",
	phone: "561.633.3829",
	email: "jason.dayne@gmail.com",
	picture: "http://waynehastings.com/wp-content/uploads/2014/01/2348700.jpg",
	welcomeMessage: "Thank you for visiting my site.",
	locations: ["Jupiter, FL", "Los Angelels, CA"],
	gitHub: "https://github.com/JDay18Gi",
	skills: ["HTML", "CSS", "JavaScript", "Python"],
	addBio: function (bioProperty, helperVar) {
		var formattedProperty = helperVar.replace("%data%", bioProperty);
		$("#header").prepend(formattedProperty);
		},
	addSkills: function (bioSkillsLocation){
	if(bioSkillsLocation.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var index in bioSkillsLocation){
			var formattedSkills = HTMLskills.replace("%data%", bioSkillsLocation[index]);
			$("#skills").append(formattedSkills);
			}
			}
	}
};

bio.addBio(bio.role, HTMLheaderRole);
bio.addBio(bio.name, HTMLheaderName);
bio.addSkills(bio.skills);

var workObject = {
	"jobs":[
		{
		"position": "Academic Coach",
		"employer": "CollegePlus",
		"years": "June 2011 - Present",
		"location": "West Palm Beach Area, FL",
		"description": "Responsible for the academic progress of 80+ students. Focused on developing effective strategies for accelerated distance learning. Completed speed learning stunt of 18 college credits in 6 days: <a href='https://www.youtube.com/watch?v=85DlViGkvJc' target='_blank'>https://www.youtube.com/watch?v=85DlViGkvJc</a>"
		},
		{
		"position": "Executive Assistant",
		"employer": "RedRhino",
		"years": "June 13 - March 14",
		"location": "Lake Worth, FL",
		"description": "Assisted CEO and CMO with a wide rang of projects. Oversaw technology deployment, phone system, website development, and Google Apps accounts. Responsible for negotiating service contracts and technology deployment."
		}],
	addWork: function () {
		$("#workExperience").append(HTMLworkStart);
		for(var job in workObject.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", workObject.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", workObject.jobs[job].position);
			var formattedLocation = HTMLworkLocation.replace("%data%", workObject.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", workObject.jobs[job].years);
			var formattedDescription = HTMLworkDescription.replace("%data%", workObject.jobs[job].description);
			var formattedEmployerEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
			$(".work-entry:last").append(formattedEmployerEntry);
			}
		}
	};

workObject.addWork();


var educationalObject = {
	"schools":[
		{
			"name": "Thomas Edison State College",
			"degree": "Bachelors of Science in Business Administratrion",
			"years": "Graduated 2011",
			"location": "remote",
			"major": ["Finance"]
		},
		{
			"name": "Udacity",
			"degree": "NanoDegree",
			"years": "2015",
			"location": "remote",
			"major": ["Intro to Programming", "Front-End Web Developer (in progress)"]
		}
		]};


var projectsObject = {
	"projects": [
		{
		"title": "<a href='http://www.discernmentgroup.com/' target='_blank'>DiscernmentGroup.com</a>",
		"dates": "2013-2015",
		"description": "Maintained Wordpress website for consulting firm.",
		"picture": "images/DGI.png"
		},
		{
		"title": "<a href='https://www.facebook.com/Renaisserve' target='_blank'>Renaisserve.com</a>",
		"dates": "2013-2015",
		"description": "Maintained SquareSpace website for myself.",
		"picture": "images/Renaisserve.png"
		}],
	addProjects: function () {
		for(var project in projectsObject.projects){
			$("#projects").append(HTMLprojectStart);
			var projectTitle = HTMLprojectTitle.replace("%data%", projectsObject.projects[project].title);
			var projectDate = HTMLprojectDates.replace("%data%", projectsObject.projects[project].dates);
			var projectDescription = HTMLprojectDescription.replace("%data%", projectsObject.projects[project].description);
			var projectPicture = HTMLprojectImage.replace("%data%", projectsObject.projects[project].picture);
			var formattedProjectEntry = projectTitle + projectDate + projectDescription + projectPicture;
			$(".project-entry:last").append(formattedProjectEntry);
		}
	}
};

projectsObject.addProjects();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
    logClicks(x,y);
});




function addContact () {
	var emailFormatted = HTMLemail.replace("%data%", bio.email);
	var gitHubFormatted = HTMLgithub.replace("%data%", bio.gitHub);
	var formattedContacts = emailFormatted + gitHubFormatted;
	$("#topContacts").append(formattedContacts);
	$("#footerContacts").append(formattedContacts);
}
addContact();

function addEducation () {
	$("#education").append(HTMLschoolStart);
	for(school in educationalObject.schools){
	var schoolName = HTMLschoolName.replace("%data%", educationalObject.schools[school].name);
	var schoolDegrees = HTMLschoolDegree.replace("%data%", educationalObject.schools[school].degree);
	var schoolYears = HTMLschoolDates.replace("%data%", educationalObject.schools[school].years);
	var schoolLocation = HTMLschoolLocation.replace("%data%", educationalObject.schools[school].location);

	var majorList = [];
	for(majorIndex in educationalObject.schools[school].major) {
		var schoolMajor = HTMLschoolMajor.replace("%data%", educationalObject.schools[school].major[majorIndex]);
		majorList.push(schoolMajor);
	}
	var formattedSchools = schoolName + schoolDegrees + schoolYears + schoolLocation + majorList.join(" ");
	$(".education-entry:last").append(formattedSchools);
};
}

addEducation();

