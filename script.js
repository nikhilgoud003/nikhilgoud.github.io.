// Theme Management (unchanged)
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
const updateButtonIcon = (theme) => {
  if (theme === 'light') {
    themeToggle.innerHTML = '🌙';
  } else {
    themeToggle.innerHTML = '🌞';
  }
};
updateButtonIcon(savedTheme);
themeToggle?.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateButtonIcon(newTheme);
});

// Skills Data
const skills = [
  { name: "Python", icon: "assets/python-icon.svg" },
  { name: "SQL", icon: "assets/sql-icon.svg" },
  { name: "Kafka", icon: "assets/apache_kafka-icon.svg" },
  { name: "AWS", icon: "assets/aws-icon.svg" },
  { name: "javascript", icon: "assets/javascript-logo.svg" },
  { name: "MySQL", icon: "assets/mysql-logo.svg" },
  { name: "BERT", icon: "assets/BERT.jpeg" },
  { name: "C", icon: "assets/C_Programming_Language.svg" },
  { name: "C++", icon: "assets/C++_Logo.svg" },
  { name: "CSS3", icon: "assets/CSS3_logo.svg" },
  { name: "Git", icon: "assets/git-logo.svg" },
  { name: "HTML", icon: "assets/HTML5_logo.svg" },
  { name: "Jenkins", icon: "assets/jenkins_logo.svg" },
  { name: "Docker", icon: "assets/docker-icon.svg" }
];

// Only one DOMContentLoaded event!
document.addEventListener('DOMContentLoaded', () => {
  // Populate skills
  const skillsList = document.querySelector('.skills-list');
  skillsList.innerHTML = ''; // Clear any existing content

  skills.forEach(skill => {
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'center';
    li.style.gap = '0.5rem';

    // Create image element
    const img = document.createElement('img');
    img.src = skill.icon;
    img.alt = skill.name;
    img.className = 'skill-icon';
    img.width = 32;
    img.height = 32;
    // If image fails to load, show name instead
    img.onerror = function() {
      img.style.display = 'none';
      fallback.style.display = 'inline';
    };

    // Fallback span
    const fallback = document.createElement('span');
    fallback.textContent = skill.name;
    fallback.style.display = 'none';

    li.appendChild(img);
    li.appendChild(fallback);
    // Always show name next to icon
    const nameSpan = document.createElement('span');
    nameSpan.textContent = skill.name;
    li.appendChild(nameSpan);

    skillsList.appendChild(li);
  });
});
