button.onclick = function() {
  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
  const filtered = json.filter((quote) => quote.userId>9);
  
  list.innerHTML = filtered.map((curr,i) => {
    
    return `<li><p>${i+1}</p><p>Title: ${curr.title}<br>User id: ${curr.userId}</p></li>`;
    }                    
  ).join('');  
 
 }       
)
  

}


  
  
