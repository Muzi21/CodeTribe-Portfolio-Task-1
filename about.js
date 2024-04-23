window.addEventListener(('load'), () => {
    loadProjects()
})

function loadProjects() {
const projects = [
    {
        picture:"media/BookstoreIndex.png",
        projectName: 'BookStore Website',
        techStacks: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        githubLink: "https://github.com/Muzi21/Bookstore-Website.git",
    },
    {
        picture:"media/Char1.png",
        projectName: 'Charlotte Celebrations Website',
        techStacks: ['HTML', 'CSS','JavaScript'],
        livePreviewLink: "projects/CharlotteCelebrations/index.html"
    },
    {
        picture:"media/SMS-AboutPage.png",
        projectName: 'Matavha Primary School Management System',
        techStacks: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        description: 'Hi there',
        githubLink: "https://github.com/Muzi21/Matavha-Student-Management-Web.git",
    },
    {
        picture:"media/Calculator.png",
        projectName: 'Scientific Calculator',
        techStacks: ['HTML', 'CSS'],
        livePreviewLink: "projects/Calculator.html"
    },
    {
        picture:"media/Scrabble2.png",
        projectName: 'Scrabble Game',
        techStacks: ['JAVA'],
        githubLink: "https://github.com/Muzi21/Scrabble-Game.git",
    }
];

const projectsContainer = document.getElementById('cards');

projects.forEach((project) => {
    const projectDetailsContainer = document.createElement('div');
    projectDetailsContainer.classList.add('card');
    projectDetailsContainer.innerHTML = `
        <div class="card">
            <img src=${project.picture} alt="" class="imgB" style="width:100%" />
            <h3>${project.projectName}</h3>
            <small>Tech stack: ${project.techStacks.join(', ')}</small>
            <div style="display: flex; justify-content: space-around; margin-top: 1rem;">
                ${project.livePreviewLink ? `<div><a href="${project.livePreviewLink}"><i class="ri-links-fill"></i> <small>Live Preview</small></a></div>` : ''}
                ${project.githubLink ? `<div><a href="${project.githubLink}"><i class="ri-github-fill"></i> <small>View Code</small></a></div>` : ''}
            </div>
        </div>
    `;
    projectsContainer.appendChild(projectDetailsContainer);
});


// Defining  personal information
const fullName = "Vusumuzi Mkhatshwa";
const occupation = "Software Development Graduate";
const introduction = `Hello there! I'm ${fullName}, a recent graduate in Software Development with a boundless passion for all things tech. With a solid foundation in programming languages like Java, C#, HTML, CSS, JavaScript, and PHP, I'm on a mission to explore the limitless possibilities of software development. I've dedicated myself to honing my skills and expanding my knowledge, eager to tackle new challenges and push the boundaries of what's possible with lines of code. Whether it's developing intuitive user interfaces for web applications, optimizing backend systems for maximum efficiency, or diving into the realm of machine learning and artificial intelligence, I thrive on the opportunity to innovate and create impactful solutions. Beyond the realm of technology, I believe in using my skills not only to build innovative software but also to make a positive impact on the world around me. Thank you for visiting my portfolio. Whether you're here to explore my projects, discuss potential collaborations, or simply connect with a fellow tech enthusiast, I'm excited to have you join me on this journey.`;

// Defining  education information
const education = [
  {
    degree: "Diploma in Information Technology in Software Development",
    institution: "IIE Rosebank College",
    year: 2022
  },
  {
    degree: "National Senior Certificate",
    institution: "Witbank High School",
    year: 2018
  }
];

// Displaying  personal information on HTML page

document.getElementById('occupation').textContent = occupation;
document.getElementById('introduction').textContent = introduction;

// Displaying  education information on HTML page
const educationContainer = document.getElementById('education');
education.forEach(edu => {
  const eduItem = document.createElement('div');
  eduItem.classList.add('edu-row');
  eduItem.innerHTML = `
    <p><i class="fa fa-graduation-cap" style="font-size:24px"></i> ${edu.degree}</p>
    <p>${edu.institution}</p>
    <p>${edu.year}</p>
    <hr>
  `;
  educationContainer.appendChild(eduItem);
});
    
}