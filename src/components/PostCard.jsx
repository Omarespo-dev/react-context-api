// Importo link
import { Link } from "react-router-dom";

// Importo axios
import axios from "axios";

// Importo usesState
import { useState, useEffect } from "react";

// importiamo il contesto globale e la parte REact di utilizzo dello stesso
import { useContext } from "react";
import CountContext from './../contexts/CountContext'

// In questo componente andiamo ad importare sola la section con i componenti poi andiamo a dare props a questo componente figlio e al padre andiamo a richiamare questo componente dando la key e la proprieta post  
export default function PostCard(props) {
    // faccio destructoring pre ricavare la proprieta posts
    const { post } = props
    
    

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { list, setlist } = useContext(CountContext);




    // SI DEVE AGGIUNGERE  A PostCard importando axios, useState ed effect e la funzione delete
    // 5 Ora andiamo a gestire la cancellazione di una lista attraverso ID
    function deleteList(idList) {
        // creo nuovo array dove all interno faccio filter di list e vado a ricavarmi l elemento iesimo e faccio return di una condizione dicendo che Se l'ID dell'elemento attuale è diverso dall'ID da eliminare, allora lo tengo nella nuova lista.
        const updateLists = list.filter((list) => {
            return list.id !== idList
        })

        // 8 Ora andiamo a fare una funzione che fa una richiesta API di tipo delete (elimina un post)
        axios.delete(`http://localhost:3000/posts/${idList}`)
            .then(res =>
                console.log(res),

                // aggiornami la set list con updateList 
                setlist(updateLists)

            )
            .catch(err => console.log(err))

        // SI DEVE AGGIUNGERE  A PostCard importando axios, useState ed effect e la funzione delete
    }



    return (
        <section className="post-set"  >
            <h2>{post.title}</h2>

            <p>Image</p>
            <img src={post.image} alt={post.title} />

            <button className="remove" onClick={() => deleteList(post.id)}>RIMUOVI</button>

            <button className="remove">
                <Link to={`/listposts/${post.id}`}>VAI AL DETTAGLIO</Link>
            </button>

        </section>
    )
}

