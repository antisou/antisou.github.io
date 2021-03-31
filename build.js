var path = require('path');
var fs = require('fs');
let template = fs.readFileSync('template.html').toString();
let json = JSON.parse(fs.readFileSync('filmiki.json', 'utf8'));
let html = ``
for(const key in json){
  html+=`<div class="${key}"><div class="category-container">
      <h2 class="category-title sub-title">${key}</h2>
      <svg viewBox="0 0 322 50" width="322">
        <path d="M50,0 L261,0 L322,50 L0,50z" fill="#0a0a0a" stroke="#FBAED2" />
      </svg>
    </div>`
  const array = json[key]
  if(array.length > 0){
    array.forEach(link=>html+=`<div class="column__video-container"><iframe class="column__video" width="320" height="180" src="${link.replace('watch?v=', 'embed/')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`)
  }else{
    html+=`<p class="paragraph">No videos in this category yet</p>`
  }
  html+=`</div>`
}
const newFile = template.replace('<!-- content -->', html)

fs.truncate('./index.html', 0, ()=>{
  fs.writeFile('./index.html', newFile, (err)=>{
    console.log(err)
  })
})