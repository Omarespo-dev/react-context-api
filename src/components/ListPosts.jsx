// Importo usesState
import { useState, useEffect } from "react";
// importo PostCard
import PostCard from "./PostCard";

// Importo axios
import axios from "axios";

export default function ListPosts() {

    //1 Ora vado a utilizzare lo useState perche mi permette di prendere l array di oggetti e catturarne l evento.
    const [list, setlist] = useState([])
    // -- list e l array di oggetti e setlist vado ad aggiornare quello array di ogetti



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


    }


    // 6 Ora andiamo a fare una funzione che fa una richiesta API di tipo get
    function fetchTodos() {
        axios.get("http://localhost:3000/posts")
            .then((res) => setlist(res.data))

    }

    useEffect(fetchTodos, [])




    return (
        <>
            <main>
                <div>
                
                    {list.length === 0 ?

                        <h3>NON CI SONO ELEMENTI</h3>

                        :

                        //{/* post card  with map*/}
                        list.map((post) =>
                            <PostCard key={post.id} post={post}/>
                        )
                    }

                </div>
            </main>

        </>
    );
}