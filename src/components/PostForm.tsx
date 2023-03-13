import { useState } from "react";

type PostFormProps = {
    postForm: (title:string,body:string) => void;
}



export function PostForm({postForm}:PostFormProps){

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    function postOnClick(){
        postForm(title,body);
    }

    return(
        <>
            <fieldset>
                <legend><b>Form de Post</b></legend>
                <input className="form-control" placeholder="Digite o título" type="text" value={title} onChange={event => setTitle(event.target.value)} /> <br />
                <textarea className="form-control" placeholder="Digite o conteúdo do post" cols={30} rows={10} value={body} onChange={event => setBody(event.target.value)}></textarea> <br />
                <button className="btn btn-success" onClick={postOnClick}>Enviar</button>
                <br />
                <br />
            </fieldset>
        </>
    )
}