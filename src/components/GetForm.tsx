import { FormType } from "../types/FormType"


type Props = {
    posts:FormType[];
}

export function GetForm({posts}:Props){
    return(
        <>
            <ul className="list-group">
                {posts.map((item,index)=>(
                   /*  <fieldset key={index} style={{padding:30,marginBottom:5}}> */
                    <div key={index}>
                        <li className="list-group-item">
                            <h5>Post: </h5>
                            <b>Id:</b> {item.id} <br />
                            <b>Title: </b>{item.title} <br />
                            <b>Body: </b>{item.body} <br />
                            <b>userId: </b>{item.userId} <br />
                        </li>      
                    </div> 
                  /*   </fieldset> */
                ))}
            </ul>
        </>
    )
}