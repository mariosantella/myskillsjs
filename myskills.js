let skills = [
     {"s": "Python", "score": 10},
     {"s": "Javascript", "score": 7.5},
     {"s": "Laravel", "score": 5},
     {"s": "PHP", "score": 7.2},
     {"s": "MongoDB", "score": 6.8},
     {"s": "MySQL", "score": 6.9},
     {"s": "GraphQL", "score": 2},
     {"s": "Cloud Computing", "score": 6},
     {"s": "Docker", "score": 4},
      {"s": "Linux", "score": 6.5},
      {"s": "Git", "score": 7},
      {"s": "HTML", "score": 8},
      {"s": "CSS", "score": 7},
      {"s": "Django", "score": 6.5},
      {"s": "Flask", "score": 6.5},
      {"s": "Flet", "score": 5.5},
      {"s": "SEO", "score": 6},
      {"s": "Marketing", "score": 6},
      {"s": "Growth Hacking", "score": 6},
   ];

getSkillColor = (score) => {
    // get the red component
    let r = Math.floor(255 - (score * 25.5));
    
    // get the green component
    let g = Math.floor(score * 25.5);

    // return the rgb value
    return "rgb(" + r + "," + g + ",0)";
  }


   // document onload
    document.addEventListener("DOMContentLoaded", function(event) {
    // add a style tag to the head of the document with the following css
    let style = document.createElement("style");
    style.innerHTML = `
    #skills{
      width: 100%;
      padding: 1em;
   }
   #skills .skill{
       display: inline-block;
       background-color: #eee;
       padding: 0.5em;
       margin: 0.5em;
       border-radius: 4px;
   }
   #knw_map{
       text-align: center;
   }
   `;
    document.head.appendChild(style);

    // render a serie of divs in the page that represent the skills in the array
    // every skill div has a different color based on the score
    // the score is represented by a number between 1 and 10
    // the color is a gradient from red to green
    // the divs are rendered in the skills div
    
    // get the skills div
    let skillsDiv = document.getElementById("skills");

    // loop through the skills array and 
    for (let i = 0; i < skills.length; i++) {
      //order it by score
      skills.sort(function(a, b) {
        return b.score - a.score;
      });

      // create a div for the skill
      let skillDiv = document.createElement("div");
      skillDiv.className = "skill";

      // set the background color of the div based on the score
      skillDiv.style.backgroundColor = getSkillColor(skills[i].score);

      // add the skill name to the div
      skillDiv.innerHTML = skills[i].s;

      // add the div to the skills div
      skillsDiv.appendChild(skillDiv);

      // render the div bigger if the score is higher
      skillDiv.style.padding = skills[i].score * 0.77 + "%";
      
    }
  });
