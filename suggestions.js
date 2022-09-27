let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

let repos = []
let url = `https://api.github.com/search/repositories?q=w`;
const url2 = `https://api.github.com/search/repositories?q=react`;

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log(commits[0]));


  fetch(url).then(response=>response.json()).then(obj=>{
    console.log(obj)
    console.log(obj.total_count)
    console.log(obj.items)
    const reposArray = obj.items
    console.log('full name is: ',reposArray[0].full_name)
    console.log('length: ', reposArray.length)
  })

  