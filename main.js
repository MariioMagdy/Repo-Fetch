let theInput= document.querySelector(".get-repo input");
let getButton= document.querySelector(".get");
let repoDate= document.querySelector(".show-data");
// console.log(getButton)

getButton.onclick=function(){
    getRepos();
}

function getRepos(){
    if(theInput.value == ""){

    repoDate.innerHTML="<span>Please write Github userNAme</span>";

    }else{
    repoDate.innerHTML=""
  fetch(`https://api.github.com/users/${theInput.value}/repos`)
  .then(res => 
    res.json()
    )
  .then((data) =>{
    data.forEach(element => {
    
      console.log(element.name);
      //create the main div
      let mainDiv=document.createElement("div");
      // create text node 

      let textName = document.createTextNode(`Repo Name: ${element.name}`)

      //append child 
      mainDiv.appendChild(textName)

      //create repo url 
      let theUrl=document.createElement("a")

      //create URL text

      let urlText = document.createTextNode(` Visit `)

      //append url text 
      theUrl.appendChild(urlText)
      //add the hypertext ref

      theUrl.href=element.html_url

      //add target attribute 
      theUrl.target="_blank"

      //create stars 
      let stars = document.createElement("span")
      //create starts text 
      let starsText= document.createTextNode(`Stars ${element.stargazers_count}`)
      //append starsText to the span tag 
      stars.appendChild(starsText)
      //add class on mainDiv 
      mainDiv.className="repo-box"
      //append the URL to the mainDiv
      mainDiv.appendChild(theUrl)
   
      //append the stars tag to main div 
      mainDiv.appendChild(stars)
         //append the main div to container 
      repoDate.appendChild(mainDiv)
    });
  
  
  
  });
    // console.log(theInput.value);
    }
};

