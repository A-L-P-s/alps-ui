<!-- ReadMe -->
<a id="readme-top"></a>

<!-- Opening -->
<br />
<div align="center">
  <a href="https://github.com/A-L-P-s/ALPs_api">
    <img src="src/assets/logo.png" alt="Logo" width="350">
  </a>
 
<!-- <h2 align="center"></h2> -->
  <h2 align="center">Advanced Language Practices (ALPs)</h2>
    <p align="center">
      Improve your language skills with inspiring images & immediate feedback!
      <hr><br>
      Now that you've "climbed the mountain" of learning another language, keep your skills fresh with regular practice! Language output (speaking & writing) is key but can get dull with routine drills, plus you may never know if it's entirely correct. <br><span>🔸</span><br> With ALPs, every writing challenge comes with an inspiring image to ignite your imagination, a random verb & grammar points to help focus your language, and immediate feedback with the help of AI!
    </p><br>
</div>
<hr>

<br>

<!-- TABLE OF CONTENTS -->
### Table of Contents

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#agile-methodology">Agile Methodology</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#testing">Testing</a></li>
      </ul>
    </li>
    <li><a href="#wireframes">WireFrames</a></li>
    <li><a href="#technologies">Stretch Technologies</a></li>
    <li><a href="#refactor">Future Iterations</a></li>
    <li><a href="#contact">Contributors</a></li>
  </ol>
<br>

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project">About the Project</h2>

<span>🔸</span> [Deployed Site](https://a-l-p-s.github.io/alps-ui/)
<br>
<span>🔸</span> [Backend Service](https://git.heroku.com/calm-thicket-75558.git)
<br>
<span>🔸</span> [Back End Repository](https://github.com/A-L-P-s/ALPS_api)
<br>

[Video Presentation](EMBED VIDEO HERE)

**ALPs** was created by a cross-functional development team of students from the Turing School of Software and Design as their [capstone project](https://mod4.turing.edu/projects/capstone/).

The mission of **ALPs** is to provide users with writing promts that ignite their imagination and provide immediate feedback on their language output.

Users simply choose their target language via an avatar to start a new challenge. When they begin, they'll see a random verb, inspiring image, and multiple grammar points to create fresh, unique sentences. Once they submit the challenge -- with the help of AI -- immediate feedback and correct sentences are provided so they can review and learn even faster! Users also have the option to email a copy of their work to themselves since tracking personal progress not only expediates growth but also cultivates confidence!

<br>

<!-- Agile Methodology -->
### Agile Methodology

This method is a flexible and iterative approach to project management that focuses on collaboration, adaptability, and continuous improvement. 

The `agile methodology` was chosen for backend development to expedite the app's launch and progressively abstract functions across multiple phases of development.

<br>

<!-- Built With -->
### Built With
#### `Collaboration Tools`
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![GitHub](https://img.shields.io/badge/github-10A28C.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-4B0082.svg?style=for-the-badge&logo=git&logoColor=white)

#### `Frontend Technologies`
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Cypress](	https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

#### `Packages Used`
- [React Spinners](https://www.npmjs.com/package/react-spinners)
  - NPM package used for loading animation viewed while challenge submission is being processed
- [React Modal](https://www.npmjs.com/package/react-modal)
  - NPM package used for instructions pop up on prompt page
- [@types/react-modal](https://www.npmjs.com/package/@types/react-modal)
  - NPM package used for type definitions for implementing the react modal in TypeScript

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started 

If you'd like to demo this application on your local machine:
1. Fork and clone this repo: `git clone git@github.com:A-L-P-s/alps_ui.git`
2. Visit the [Backend Repo](https://github.com/A-L-P-s/ALPs_api) and follow the steps to demo the ALPs API locally
3. Navigate to the root folder: `cd alps_ui`
4. Run: `npm install` to install necessary dependencies
5. Run: `npm start` to open the local host on your machine

<br>


<!-- Testing -->
### Testing 

To run the test specs in Cypress, run `npm run cypress` in your terminal within your Apls UI repo!

## WireFrames 
  
<details>
  <summary>HomePage</summary>
  <img src='src/assets/home-wireframe.png'>
</details>

<details>
  <summary>User Dashboard</summary>
  <img src='src/assets/dashboard-wireframe.png'>
</details>

<details>
  <summary>New Challenge Page</summary>
  <img src='src/assets/prompt-wireframe.png'>
</details>
  
 <details>
  <summary>Individual Challenge Page</summary>
  <img src='src/assets/feedback-wireframe.png'>
</details>

<!-- not sure we need this on FE?
View these endpoints in [Postman] (add link here) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Future Iterations -->
<h2 id="refactor">Future Iterations</h2> 

<details>
  <summary>See Refactoring Suggestions</summary>
  <dl>
    <dt><span>🔸</span> Delete Past Challenge</dt>
      <dd>- Allow users to delete challenges that they do not want to see on their dashboard! This would require adding a button on the past challenge feedback component that would hit the existing BE delete endpoint.</dd>
  </dl>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<h2 id="contact">Contributors</h2>

<br>

| [<img alt="Kirk Hauck" width="100" src=".github/kirk.jpg"/>](https://www.linkedin.com/in/kirk-hauck/) | [<img alt="Bea Ordonez" width="100" src=".github/bea.jpg"/>](https://www.linkedin.com/in/bea-ordonez/) | [<img alt="Katherine Blaine" width="100" src=".github/katherine.jpg"/>](https://www.linkedin.com/in/katherinekblaine/) | [<img alt="Tyalor Pridgen" width="100" src=".github/taylor.jpg"/>](https://www.linkedin.com/in/taylor-pridgen-a3aa7918/) | [<img alt="Brian Zanti" width="100" src=".github/brian.jpg"/>](https://www.linkedin.com/in/brianzanti/) | 
| ------------------ | ------------ | -------------- | ----------- | -------------- | 
| Kirk Hauck | Bea Ordonez | Katherine Blaine | Tyalor Pridgen | Brian Zanti | 
| FrontEnd | FrontEnd | FrontEnd | Project Mentor | Project Manager |
| [GitHub](https://github.com/kirkhauck) | [GitHub](https://github.com/bea-ordonez) | [GitHub](https://github.com/KatherineBlaine) | [GitHub](https://github.com/pridgey) | [GitHub](https://github.com/BrianZanti) |
| [LinkedIn](https://www.linkedin.com/in/kirk-hauck/) |  [LinkedIn](https://www.linkedin.com/in/bea-ordonez/) | [LinkedIn](https://www.linkedin.com/in/katherinekblaine/) | [LinkedIn](https://www.linkedin.com/in/taylor-pridgen-a3aa7918/) | [LinkedIn](https://www.linkedin.com/in/brianzanti/) |

<br>

| [<img alt="Caleb Thomas" width="100" src=".github/caleb.jpg"/>](https://www.linkedin.com/in/calebjthomas/) | [<img alt="James Taylor" width="100" src=".github/james.jpg"/>](https://www.linkedin.com/in/james-taylor-a02a7a199/) | [<img alt="Huy Phan" width="100" src=".github/huy.jpg"/>](https://www.linkedin.com/in/huy-phan-2471b3261/) | [<img alt="David Marino" width="100" src=".github/david.jpg"/>](https://www.linkedin.com/in/davidjmarino8/) | [<img alt="Melony Erin Franchini" width="100" src=".github/mel.jpg"/>](https://www.linkedin.com/in/melony-erin-franchini/) |
| ------------------ | ------------ | -------------- | ----------- | -------------- | 
| Caleb Thomas | James Taylor | Huy Phan | David Marino | Melony Erin Franchini |
| BackEnd | BackEnd | BackEnd | BackEnd | BackEnd | 
| [GitHub](https://github.com/cjthomas00) | [GitHub](https://github.com/JTaylor28) | [GitHub](https://github.com/HuyPhan2025) | [GitHub](https://github.com/davejm8) | [GitHub](https://github.com/MelTravelz) |
| [LinkedIn](https://www.linkedin.com/in/calebjthomas/) |  [LinkedIn](https://www.linkedin.com/in/james-taylor-a02a7a199/) | [LinkedIn](https://www.linkedin.com/in/huy-phan-2471b3261/) | [LinkedIn](https://www.linkedin.com/in/davidjmarino8/) | [LinkedIn](https://www.linkedin.com/in/melony-erin-franchini/) |

<p align="right">(<a href="#readme-top">back to top</a>)</p>
