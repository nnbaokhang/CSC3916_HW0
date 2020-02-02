const axios = require('axios')

async function makeCall(phrase){
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })
    return {  
      data: results.data,  
      status: results.status,  
      statusText: results.statusText,  
      headers: results.headers, 
      requestHeader: results.config.headers 
    } 
    
}

let resObject = makeCall("VlC5MkVIwqkC")
//Need to wait to have res from makeCall func
setTimeout( () =>{ console.log(resObject); }, 1000);