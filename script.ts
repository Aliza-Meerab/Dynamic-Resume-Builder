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
const toggleButton = document.getElementById('toggle') as HTMLButtonElement;
const visibility = document.getElementById('skills') as HTMLFormElement;


toggleButton.addEventListener('click', () => {

    if (visibility.style.display === 'none') {
        visibility.style.display = 'block'; 
    } else {
        visibility.style.display = 'none';
    }
});

window.onload = function () {
    let toggleButton2 = document.getElementById('toggle2') as HTMLButtonElement
    let visibility2 = document.getElementById('experience') as HTMLFormElement
    toggleButton2.addEventListener('click', function () {
  


        if (visibility2.style.display === 'none') {
            visibility2.style.display = 'block';
        }
        else {
            visibility2.style.display = 'none';
        }
    });
};




const toggleButton3 = document.getElementById('toggle3') as HTMLButtonElement;
const visibility3 = document.getElementById('education') as HTMLFormElement;


toggleButton3.addEventListener('click', () => {

    if (visibility3.style.display === 'none') {
        visibility3.style.display = 'block'; 
    } else {
        visibility3.style.display = 'none';
    }
});

// Now making it dynamic

// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    // Select elements from the DOM
    const resumeForm = document.getElementById('resumeform') as HTMLFormElement;
    const submitButton = document.getElementById('submit') as HTMLButtonElement;
  
    // Dynamic Section Containers
    const educationContainer = document.getElementById('education') as HTMLDivElement;
    const skillsContainer = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceContainer = document.getElementById('experience') as HTMLTextAreaElement;
  
    // Dynamically add new education, skills, and experience fields
    const toggleEducation = document.getElementById('toggle3') as HTMLButtonElement;
    const toggleSkills = document.getElementById('toggle') as HTMLButtonElement;
    const toggleExperience = document.getElementById('toggle2') as HTMLButtonElement;
  
    // Event listeners for dynamic section addition
    toggleEducation.addEventListener('click', () => {
      const newEducationField = document.createElement('div');
      newEducationField.innerHTML = `<textarea name="education" rows="4" required></textarea>`;
      educationContainer.appendChild(newEducationField);
    });
  
    toggleSkills.addEventListener('click', () => {
      const newSkillsField = document.createElement('div');
      newSkillsField.innerHTML = `<textarea name="skills" rows="4" required></textarea>`;
      skillsContainer.appendChild(newSkillsField);
    });
  
    toggleExperience.addEventListener('click', () => {
      const newExperienceField = document.createElement('div');
      newExperienceField.innerHTML = `<textarea name="experience" rows="4" required></textarea>`;
      experienceContainer.appendChild(newExperienceField);
    });
  
    // Handle the form submission
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();  // Prevent the default form submission behavior
  
      // Collect the data from the form
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;
      const experience = (document.getElementById('experience') as HTMLInputElement).value;
  
      
  
      // Create the resume content
      let resumeContent = `
      
      
      <form  
      style:"  display: flex;
  flex-wrap: wrap;
  margin: 50px;
  max-width: 600px;
  padding: 20px;
  background-color:#fafeff;
  box-shadow: 0 4px 8px rgba(0 , 0, 0, 0.4);
  border: 2px solid#707070;
  border-radius: 8px;
  padding-bottom: 30px;">

  <div style:" display: flex;
  text-align: left;
  flex-wrap: wrap;
  border: none;
  background-color:#c0c8ca ;
  font-weight: 600;
  font-size: 17px;
  color:#2E3944 ;">

  <h1 style:"text-align: center;">Your Resume </h1>
      <h3>Name: ${name}</h3>
      <hr>
        <h3><strong>Email:</strong> ${email}</h3>
        <hr>
        <h3><strong>Phone:</strong> ${phone}</h3>
        <hr>
        <h3>Education:
        <br>
        <h3  style="margin-left: 3pc;">${education}</h3>
        </h3>
        <hr>
        
        <h3>Skills:
        <br>
        <h3  style="margin-left: 3pc;">${skills}</h3>
        </h3>
        <hr>

        <h3>Experience:
        <br>
        <h3  style="margin-left: 3pc;">${experience}</h3>
        </h3>
        <hr>
</div>
        </form>
      `;
  
      // Display the resume
      const resumeOutput = document.getElementById('resumeContent') as HTMLDivElement;
      resumeOutput.innerHTML = resumeContent;
  
      // Optionally clear the form after submission
      resumeForm.reset();
    });
  });