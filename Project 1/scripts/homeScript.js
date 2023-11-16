const bodyAfter=document.getElementById('bodyAfter')
        const addBlogIcon=document.getElementById('addBlogIcon')
        const addBlogContainer=document.getElementById('addBlogContainer')
        const closeAddBlogBox=document.getElementById('closeAddBlogBox')
        const AddBlogButton=document.getElementById('AddBlogButton')
        closeAddBlogBox.style.cursor='pointer';
        const Poster=document.getElementById('poster')
        
        
        //code for '+' icon click
        addBlogIcon.addEventListener('click',()=>{
            bodyAfter.classList.add('bodyAfter');
            addBlogContainer.classList.add('active')
            console.log(bodyAfter)
            console.log(addBlogIcon)
            console.log(addBlogContainer)
            console.log(closeAddBlogBox)
            console.log(AddBlogButton)
        })
        closeAddBlogBox.addEventListener('click',()=>{
            bodyAfter.classList.remove('bodyAfter');
            addBlogContainer.classList.remove('active')

        })
        //add blog to localstorage
        AddBlogButton.addEventListener('click',()=>{
            
            
            if(Poster.files.length>0){
                const file=Poster.files[0]
                const reader=new FileReader();
                reader.onload=function(event){
                    const dataURL=event.target.result;

                   
                    
                    
                    const BlogTitle=document.getElementById('BlogTitle')
            const BlogDesc=document.getElementById('BlogDesc')
            const BlogText=document.getElementById('BlogText')
             
            
            const BlogData={
                Poster:dataURL,
                BlogTitle:BlogTitle.value,
                BlogDesc:BlogDesc.value,
                BlogText:BlogText.value
            }
            
            
            window.localStorage.setItem(BlogTitle.value,JSON.stringify(BlogData))
                }
                reader.readAsDataURL(file)
                window.location.reload()
                
            }else{
                window.alert("please select Post image file")
            }
           
        })

       
            
       function addBlogPost(){
           
            for(const key in window.localStorage){
            if(window.localStorage.hasOwnProperty(key)){
                const Container=document.getElementById('main')
                const node=document.createElement('div')
                
                const node1=document.createElement('img')
                
                const node2=document.createElement('h3')
                const node3=document.createElement('p')
                const node4=document.createElement('a')
            
                node.classList.add('BlogBox')
                Container.appendChild(node)
               
                node1.src=JSON.parse(window.localStorage.getItem(key)).Poster
                node1.style.width='200px';
                node1.style.height='200px'
                node1.style.borderRadius='10px'

                
                node.appendChild(node1)
                node.appendChild(node2)
                node.appendChild(node3)
                node.appendChild(node4)
                
                
                
                node2.innerText=JSON.parse(window.localStorage.getItem(key)).BlogTitle
                node3.innerText=JSON.parse(window.localStorage.getItem(key)).BlogDesc 
                node4.innerHTML='Read' 
                node4.style.color='white'
                node4.style.backgroundColor='blue'  
                node4.style.textAlign='center'    
                node4.style.paddingTop='3px'   
                node4.style.paddingBottom='3px' 
                node4.style.textDecoration='none'
                
                const title=node2.innerText;
                node4.href=`blog.html?title=${encodeURIComponent(title)}`
            }
        }
    }
    addBlogPost()     
