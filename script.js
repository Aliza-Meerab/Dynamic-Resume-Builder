// window.onload = function () {
//  let toggleButton = document.getElementById('toggle3') as HTMLButtonElement
//  let visibility1 = document.getElementById('education') as HTMLFormElement
//   toggleButton.addEventListener('click', function () {
//       if (visibility1.style.display === 'none') {
//           visibility1.style.display = 'block';
//       }
//       else {
//           visibility1.style.display = 'none';
//       }
//   });
// }
// document.getElementById('toggle')?.addEventListener('click', () => {
//     const visibility1 = document.getElementById('skills');
//     if (visibility1) {
//         visibility1.classList.toggle('hidden');
//     }
// });
var toggleButton = document.getElementById('toggle');
var visibility = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (visibility.style.display === 'none') {
        visibility.style.display = 'block';
    }
    else {
        visibility.style.display = 'none';
    }
});
window.onload = function () {
    var toggleButton2 = document.getElementById('toggle2');
    var visibility2 = document.getElementById('experience');
    toggleButton2.addEventListener('click', function () {
        if (visibility2.style.display === 'none') {
            visibility2.style.display = 'block';
        }
        else {
            visibility2.style.display = 'none';
        }
    });
};
var toggleButton3 = document.getElementById('toggle3');
var visibility3 = document.getElementById('education');
toggleButton3.addEventListener('click', function () {
    if (visibility3.style.display === 'none') {
        visibility3.style.display = 'block';
    }
    else {
        visibility3.style.display = 'none';
    }
});
// Now making it dynamic
// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', function () {
    // Select elements from the DOM
    var resumeForm = document.getElementById('resumeform');
    var submitButton = document.getElementById('submit');
    // Dynamic Section Containers
    var educationContainer = document.getElementById('education');
    var skillsContainer = document.getElementById('skills');
    var experienceContainer = document.getElementById('experience');
    // Dynamically add new education, skills, and experience fields
    var toggleEducation = document.getElementById('toggle3');
    var toggleSkills = document.getElementById('toggle');
    var toggleExperience = document.getElementById('toggle2');
    // Event listeners for dynamic section addition
    toggleEducation.addEventListener('click', function () {
        var newEducationField = document.createElement('div');
        newEducationField.innerHTML = "<textarea name=\"education\" rows=\"4\" required></textarea>";
        educationContainer.appendChild(newEducationField);
    });
    toggleSkills.addEventListener('click', function () {
        var newSkillsField = document.createElement('div');
        newSkillsField.innerHTML = "<textarea name=\"skills\" rows=\"4\" required></textarea>";
        skillsContainer.appendChild(newSkillsField);
    });
    toggleExperience.addEventListener('click', function () {
        var newExperienceField = document.createElement('div');
        newExperienceField.innerHTML = "<textarea name=\"experience\" rows=\"4\" required></textarea>";
        experienceContainer.appendChild(newExperienceField);
    });
    // Handle the form submission
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        // Collect the data from the form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        // Create the resume content
        var resumeContent = "\n      \n      \n      <form  \n      style:\"  display: flex;\n  flex-wrap: wrap;\n  margin: 50px;\n  max-width: 600px;\n  padding: 20px;\n  background-color:#fafeff;\n  box-shadow: 0 4px 8px rgba(0 , 0, 0, 0.4);\n  border: 2px solid#707070;\n  border-radius: 8px;\n  padding-bottom: 30px;\">\n\n  <div style:\" display: flex;\n  text-align: left;\n  flex-wrap: wrap;\n  border: none;\n  background-color:#c0c8ca ;\n  font-weight: 600;\n  font-size: 17px;\n  color:#2E3944 ;\">\n\n  <h1 style:\"text-align: center;\">Your Resume </h1>\n      <h3>Name: ".concat(name, "</h3>\n      <hr>\n        <h3><strong>Email:</strong> ").concat(email, "</h3>\n        <hr>\n        <h3><strong>Phone:</strong> ").concat(phone, "</h3>\n        <hr>\n        <h3>Education:\n        <br>\n        <h3  style=\"margin-left: 3pc;\">").concat(education, "</h3>\n        </h3>\n        <hr>\n        \n        <h3>Skills:\n        <br>\n        <h3  style=\"margin-left: 3pc;\">").concat(skills, "</h3>\n        </h3>\n        <hr>\n\n        <h3>Experience:\n        <br>\n        <h3  style=\"margin-left: 3pc;\">").concat(experience, "</h3>\n        </h3>\n        <hr>\n</div>\n        </form>\n      ");
        // Display the resume
        var resumeOutput = document.getElementById('resumeContent');
        resumeOutput.innerHTML = resumeContent;
        // Optionally clear the form after submission
        resumeForm.reset();
    });
});
