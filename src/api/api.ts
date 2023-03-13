export async function getPosts(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    return json;
}

export function sendPost(title:string,body:string){
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body: JSON.stringify({
            title:title,
            body:body,
            userId:1
        }),
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response)=> response.json())
    .then((json)=> console.log(json))
    .then(()=>alert("Post enviado, confira o console"))
    .then((json)=> {return json})
    .catch((error)=>console.log("Erro no post",error))
}