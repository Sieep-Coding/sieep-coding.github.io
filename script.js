// script.js
function fetchGitHubRepos() {
  const username = 'sieep-coding';
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched Repositories:', data); // Debug log

      const repoContainer = document.querySelector('.github');
      if (!repoContainer) {
        console.error('No element found with the class "github".');
        return;
      }
      
      const reposWithDescription = data.filter(repo => {
        const hasDescription = repo.description && repo.description.trim() !== "";
        const hasStars = repo.stargazers_count !== 0;
        console.log(`Repo: ${repo.name}, hasDescription: ${hasDescription}, hasStars: ${hasStars}`); // Debug log
        return hasDescription && hasStars;
      });

      reposWithDescription.sort((a, b) => b.stargazers_count - a.stargazers_count);

      reposWithDescription.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('repo-card');
        
        const repoName = document.createElement('h4');
        repoName.textContent = repo.name;
        
        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description;
        
        const repoStars = document.createElement('p');
        repoStars.classList.add('repo-stars');
        repoStars.textContent = `⭐: ${repo.stargazers_count} 🍴: ${repo.forks_count}`;
        
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.classList.add('github-link');
        
        const githubIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        githubIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        githubIcon.setAttribute('viewBox', '0 0 496 512');
        githubIcon.setAttribute('class', 'github-icon');
        githubIcon.innerHTML = '<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>';

        const linkText = document.createTextNode('View on GitHub ➔');

        repoLink.appendChild(githubIcon);
        repoLink.appendChild(linkText);

        repoCard.appendChild(repoName);
        repoCard.appendChild(repoDescription);
        repoCard.appendChild(repoStars);
        repoCard.appendChild(repoLink);

        repoContainer.appendChild(repoCard);
      });
    })
    .catch(error => {
      console.error('Error fetching GitHub repositories:', error);
    });
}



// function fetchMediumPublications(userId, accessToken) {
//   const apiUrl = `https://api.medium.com/v1/users/${userId}/publications`;

//   fetch(apiUrl, {
//     headers: {
//       'Authorization': `Bearer ${accessToken}`
//     }
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Network response was not ok.');
//     })
//     .then(data => {
//       const publications = data.data;

//       // Now you have the list of publications, you can proceed with further actions
//       // For example, displaying the publications on the page
//       displayPublications(publications);
//     })
//     .catch(error => {
//       console.error('Error fetching Medium publications:', error);
//     });
// }

// function displayPublications(publications) {
//   const publicationContainer = document.querySelector('.publications');

//   publications.forEach(publication => {
//     const publicationId = publication.id;
//     const name = publication.name;
//     const description = publication.description;
//     const url = publication.url;
//     const imageUrl = publication.imageUrl;

//     const publicationCard = document.createElement('div');
//     publicationCard.classList.add('publication-card');

//     const publicationName = document.createElement('h3');
//     publicationName.textContent = name;

//     const publicationDescription = document.createElement('p');
//     publicationDescription.textContent = description;

//     const publicationLink = document.createElement('a');
//     publicationLink.href = url;
//     publicationLink.target = '_blank';
//     publicationLink.textContent = 'Visit Publication';

//     const publicationImage = document.createElement('img');
//     publicationImage.src = imageUrl;
//     publicationImage.alt = name;

//     publicationCard.appendChild(publicationImage);
//     publicationCard.appendChild(publicationName);
//     publicationCard.appendChild(publicationDescription);
//     publicationCard.appendChild(publicationLink);

//     publicationContainer.appendChild(publicationCard);
//   });
// }

// // Usage
// const userId = 'nick-stambaugh'; // Replace with the user ID
// const accessToken = '2aae72863f8bb9d3f940fc7097c60fbfa8d8db98e06c1a1fdc5f61d0a02d46de2'; // Replace with your access token
// fetchMediumPublications(userId, accessToken);



// Call the functions to fetch data and populate the sections
fetchGitHubRepos();
// fetchMediumPublications();

function BigTime(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to fade in elements
function fadeInElements() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    if (BigTime(element)) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

// Add scroll event listener
document.addEventListener('scroll', fadeInElements);

// Initial check
fadeInElements();