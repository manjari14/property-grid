 async  function getApiResponse (url , method="GET" ,body={} , header){
   
     try {
        if (method==="GET"){
            await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
              
              })
                .then((res) => res.json())
                .then((json) => {
                  console.log("==============Results Search ", json);
                  return json ;
                
                });
                
      } else{
        return await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          })
            .then((res) => res.json())
            .then((json) => {
              console.log("==============Results Search ", json);
              return json;
         
            });
        }
        
     } catch (error) {
        let obj = {
            isError:true,
            error:error
        }
        return obj;
     }
    


      }
module.exports = { getApiResponse }