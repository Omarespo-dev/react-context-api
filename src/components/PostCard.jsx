// Importo link
import { Link } from "react-router-dom";

// In questo componente andiamo ad importare sola la section con i componenti poi andiamo a dare props a questo componente figlio e al padre andiamo a richiamare questo componente dando la key e la proprieta post  
export default function PostCard(props) {
    // faccio destructoring pre ricavare la proprieta posts
    const {post} = props
    
    return (
        <section className="post-set"  >
            <h2>{post.title}</h2>

            <h4>Image</h4>
            <img src={post.image} alt={post.title} />

            {/* <h3>Contenuto</h3>
            <p>{post.content}</p>

            <h3>Tag</h3>
            <p>{post.tags.join(", ")}</p> */}

            <button className="remove" onClick={() => deleteList(post.id)}>RIMUOVI</button>

            <button className="remove">
                <Link to={`/listposts/${post.id}`}>VAI AL DETTAGLIO</Link>
            </button>

        </section>
    )
}

