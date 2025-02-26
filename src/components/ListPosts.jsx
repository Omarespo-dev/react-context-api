
// importo PostCard
import PostCard from "./PostCard";

// importiamo il contesto globale e la parte REact di utilizzo dello stesso
import { useContext } from "react";
import CountContext from './../contexts/CountContext'



export default function ListPosts() {


    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { list, setlist } = useContext(CountContext);



    return (
        <>
            <main>
                <div>
                
                    {list.length === 0 ?

                        <h3>NON CI SONO ELEMENTI</h3>

                        :

                        //{/* post card  with map*/}
                        list.map((post) =>
                            <PostCard key={post.id} post={post} />
                        )
                    }

                </div>
            </main>

        </>
    );
}