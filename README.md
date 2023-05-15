# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

<!-- ReadMe -->
<a id="readme-top"></a>

<!-- Opening -->
<br />
<div align="center">
  <a href="https://github.com/A-L-P-s/ALPs_api">
    <img src=".github/ALPs_logo_v2.jpg" alt="Logo" width="350">
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
        <li><a href="#prerequisites">Prerequisites</a></li>
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

<span>🔸</span> [Production Website](add link here)
<br>
<span>🔸</span> [Backend Service](https://git.heroku.com/calm-thicket-75558.git)
<br>
<span>🔸</span> [Front End Repository](https://github.com/A-L-P-s/alps-ui)
<br>

[Video Presentation](EMBED VIDEO HERE)

**ALPs** was created by a cross-functional development team of students from the Turing School of Software and Design as their [capstone project](https://mod4.turing.edu/projects/capstone/).

The mission of **ALPs** is to provide users with writing promts that ignite their imagination and immediate feedback on their language output.

Users simply choose their target language via an avatar to start a new challenge. When they begin, they'll see a random verb, inspiring image, and multiple grammar points to create fresh, unique sentences. Once they submit the challenge -- with the help of AI -- immediate feedback and correct sentences are provided so they can review and learn even faster! Users also have the option to email a copy of their work to themselves since tracking personal progress not only expediates growth but also cultivates confidence!

<br>

<!-- Agile Methodology -->
### Agile Methodology

This method is a flexible and iterative approach to project management that focuses on collaboration, adaptability, and continuous improvement. 

The `agile methodology` was chosen for backend development to expedite the app's launch and progressively abstract functions across multiple phases of development.

<br>

<!-- Built With -->
### Built With
#### `Phase 1:` Delivered Minimum Viable Product (MVC)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![GitHub](https://img.shields.io/badge/github-10A28C.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-4B0082.svg?style=for-the-badge&logo=git&logoColor=white)
<img src=".github/logo_github_actions.jpg" alt="GitHub Actions Badge" height="27">

<br>

#### `Phase 2:` DESCRIPTION HERE
- Add badges here

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started 

If you'd like to demo this API on your local machine:
1. Ensure you have the prerequisites
2. Sign up for external API Keys
2. Clone this repo: `git clone git@github.com:A-L-P-s/ALPs_api.git`
3. Navigate to the root folder: `cd ALPs_api`
4. Run: `bundle install`
5. Run: `rails db:{create,migrate,seed}`
6. Run: `bundle exec figaro install`
7. In the `app/config/application.yml` file add you API keys:
  - `UNSPLASH_API_KEY: add_api_key_here`
  - `OPENAI_API_KEY: add_api_key_here`
8. Inspect the `/db/schema.rb` and compare to the 'Schema' section below to ensure migration has been done successfully
9. Run: `rails s`
10. Visit http://localhost:3000/

<br>

<!-- Prerequisites -->
### Prerequisites 

- Ruby Version 3.1.1
- Rails Version 7.0.4.x
- Bundler Version 2.4.9

<br>

<!-- Testing -->
### Testing 

To test the entire spec suite, run `bundle exec rspec`.
*All tests should be passing.*

Happy path, sad path, and edge case testing were considered and tested. When a request cannot be completed, an error object is returned.

<details>
  <summary>See Error Object</summary>
    <pre>
    <code>
{
  "errors": [
    {
      "status": "404"
      "title": "Invalid Request",
      "detail": "Couldn't find User with 'id'=<id>"
     }
   ]
}
    </code></pre>
</details>

<br>

<!-- Status Codes (DO WE ADD THIS ON FE?)
### Status Codes

<details><summary>See All</summary>

**ALPs** API reutrns the folowing status codes:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 204 | `NO CONTENT` |
| 404 | `NOT FOUND` |
| 418 | `I'M A TEAPOT` |
| 422 | `UNPROCESSABLE CONTENT` |
| 500 | `INTERNAL SERVER ERROR` |

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- WireFrames -->
## WireFrames 
  
<details>
  <summary>HomePage</summary>
  Add Image here   
</details>

<details>
  <summary>User Dashboard</summary>
  Add Image here
</details>

<details>
  <summary>New Challenge Page</summary>
  Add Image here
</details>
  
 <details>
  <summary>Individual Challenge Page</summary>
  Add Image here
</details>

<!-- not sure we need this on FE?
View these endpoints in [Postman] (add link here) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Stretch Technologies -->
<h2 id="technologies">Stretch Technologies</h2>

EXAMPLE STRETCH TECH 1 
  
<img src= "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" style="width:60px; height:40px;"><a href="https://aws.amazon.com/"><strong> Elastic Beanstock Deployment</strong></a>

<p>- Phase 2: Amazon Web Services was used to deploy the application.</p><br> 

EXAMPLE STRETCH TECH 2 
  
<img src=".github/logo_python.jpg" height="30"><a href="https://www.python.org/"><strong> Python Programming Language</strong></a>

<p>- Phase 2: Used as the programming language to build microservices.</p><br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Future Iterations -->
<h2 id="refactor">Future Iterations</h2> 

<details>
  <summary>See Refactoring Suggestions</summary>
  <dl>
    <dt><span>🔸</span> ADD IDEA HERE</dt>
      <dd>- Add description here</dd>
     <dt><span>🔸</span> ADD IDEA HERE</dt>
      <dd>- Add description here</dd>
     <dt><span>🔸</span> ADD IDEA HERE</dt>
      <dd>- Add description here</dd>
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
