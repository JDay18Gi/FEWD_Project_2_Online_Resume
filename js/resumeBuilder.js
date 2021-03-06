

var bio = {
	name: "Jason D. Girard",
	role: "Front-End Web Developer",
	location: ["West Palm Beach, FL", "Jupiter, FL", "Moscow, Russia", "Los Angeles, CA", "Monterey, CA", "Geneva, Switzerland"],
	email: "jason.dayne@gmail.com",
	welcomeMessage: "Thank you for visiting my site.",
	locations: ["Jupiter, FL", "Los Angelels, CA"],
	gitHub: "https://github.com/JDay18Gi",
	skills: ["HTML", "CSS", "JavaScript", "Python"],
	display: function (bioProperty, helperVar) {
				var formattedProperty = helperVar.replace("%data%", bioProperty);
				$("#header").prepend(formattedProperty);
				},
	addSkills: function (bioSkillsLocation){
		if(bioSkillsLocation.length > 0) {
			$("#header").append(HTMLskillsStart);
			for(var skill in bioSkillsLocation){
				var formattedSkills = HTMLskills.replace("%data%", bioSkillsLocation[skill]);
				$("#skills").append(formattedSkills);
				}
			}
		},
	addContact: function() {
		var emailFormatted = HTMLemail.replace("%data%", bio.email);
		var gitHubFormatted = HTMLgithub.replace("%data%", bio.gitHub);
		var formattedContacts = emailFormatted + gitHubFormatted;
		$("#topContacts").append(formattedContacts);
		$("#footerContacts").append(formattedContacts);
		}
	};


var work = {
	"jobs":[
		{
		"position": "Academic Coach",
		"employer": "CollegePlus",
		"years": "June 2011 - Present",
		"location": "West Palm Beach, FL",
		"description": "Responsible for the academic progress of 80+ students. Focused on developing effective strategies for accelerated distance learning. Completed speed learning stunt of 18 college credits in 6 days: <a href='https://www.youtube.com/watch?v=85DlViGkvJc' target='_blank'>https://www.youtube.com/watch?v=85DlViGkvJc</a>"
		},
		{
		"position": "Executive Assistant",
		"employer": "RedRhino",
		"years": "June 13 - March 14",
		"location": "Lake Worth, FL",
		"description": "Assisted CEO and CMO with a wide rang of projects. Oversaw technology deployment, phone system, website development, and Google Apps accounts. Responsible for negotiating service contracts and technology deployment."
		}],
	display: function () {
		$("#workExperience").append(HTMLworkStart);
		for(var job in work.jobs){
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedEmployerEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
			$(".work-entry:last").append(formattedEmployerEntry);
			}
		}
};




var education = {
	"schools":[
		{
			"name": "Thomas Edison State College",
			"degree": "Bachelors of Science in Business Administratrion",
			"years": "Graduated 2011",
			"location": "Trenton, NJ",
			"major": ["Finance"]
		},
		{
			"name": "Udacity",
			"degree": "NanoDegree",
			"years": "2015",
			"location": "West Palm Beach, FL",
			"major": ["Intro to Programming", "Front-End Web Developer (in progress)"]
		}],
	display: function() {
		$("#education").append(HTMLschoolStart);
		for(var school in education.schools){
			var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var schoolDegrees = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var schoolYears = HTMLschoolDates.replace("%data%", education.schools[school].years);
			var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			var majorList = [];
			for(var majorIndex in education.schools[school].major) {
				var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[majorIndex]);
				majorList.push(schoolMajor);
			}
			var formattedSchools = schoolName + schoolDegrees + schoolYears + schoolLocation + majorList.join(" ");
			$(".education-entry:last").append(formattedSchools);
		}
	}
};


var projects = {
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
	display: function () {
		for(var project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var projectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var projectPicture = HTMLprojectImage.replace("%data%", projects.projects[project].picture);
			var formattedProjectEntry = projectTitle + projectDate + projectDescription + projectPicture;
			$(".project-entry:last").append(formattedProjectEntry);
		}
	}
};


bio.display(bio.role, HTMLheaderRole);
bio.display(bio.name, HTMLheaderName);
bio.addSkills(bio.skills);
bio.addContact();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);




