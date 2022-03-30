import React, {useState, useEffect} from "react";
import './styles.css'

export default function Blog(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        function loadApi(){
            let url = "https://sujeitoprogramador.com/rn-api/?api=posts"
            fetch(url)
            .then((r)=>r.json())
            .then((json) => {
                setPosts(json)
            })

        }
        loadApi()
    },[])

    return(
    <div className="container">
        <header>
            Blog nutrição
        </header>

        {posts.map(post => {
            return(<article key={post.id}>
                <h2>{post.titulo}</h2>
                <img src={post.capa} alt={post.titulo}/>
                <p>{post.subtitulo}</p>
            </article>)
        })}
    </div>)
}