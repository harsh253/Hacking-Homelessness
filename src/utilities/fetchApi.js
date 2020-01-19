async function fetchApi(url, method, formData=null, accessToken="notRequired", options){
    options = options || {}
    if(accessToken==="notRequired"){
        if(method === 'POST'){
            try{
                let response = await fetch(
                    url,
                    {
                        method,
                        headers:{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                        body: JSON.stringify(formData)
                    }
                )
                if(response && response.ok){
                    return {
                        formData,
                        options
                    }
                }else{
                    return {
                        error: "Some error occurred",
                        response
                    }
                }
            }
            catch(err){
                return{
                    error: `Error from catch: ${err}`
                }
            }
        }else{
            try{
                let response = await fetch(url);
                if(response && response.ok){
                    let data =  await response.json()
                    return data
                }else{
                    let error = await response
                    console.log(error.statusText)
                    return error
                }
            }
            catch(err){
                console.log(err)
                return err
            }
        }
    }
    else{
        if(method === 'POST'){
            const token = accessToken || null;
            try{
                let response = await fetch(
                    url,
                    {
                        method,
                        headers:{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify(formData)
                    }
                )
                if(response && response.ok){
                    return {
                        formData,
                        options
                    }
                }else{
                    return {
                        error: "Some error occurred",
                        response
                    }
                }
            }
            catch(err){
                return{
                    error: `Error from catch: ${err}`
                }
            }
        }else{
            try{
                let response = await fetch(url);
                if(response && response.ok){
                    let data =  await response.json()
                    return data
                }else{
                    let error = await response
                    console.log(error.statusText)
                    return error
                }
            }
            catch(err){
                console.log(err)
                return err
            }
        }
    }
}


export default fetchApi;