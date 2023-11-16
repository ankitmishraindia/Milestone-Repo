 //find params from URL
 const queryParams=new URLSearchParams(window.location.search)
 const blogTitle=queryParams.get('title')
 
 const heading=document.getElementById('blogHeading')
 const desc=document.getElementById('blogDesc')
 const blogPoster=document.getElementById('blogPoster')
 const blogContent=document.getElementById('blogContent')

 

 //get title  from localstorage
 const blogData=JSON.parse(window.localStorage.getItem(blogTitle))
 
 if(blogData){
     heading.innerText=blogData.BlogTitle;
     desc.innerText=blogData.BlogDesc;
     blogPoster.src=blogData.Poster;
     blogContent.innerText=blogData.BlogText;
 }