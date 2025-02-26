// Import LISTPOST CIOE SOLO LA LISTA DEI POST
import ListPosts from "../components/ListPosts"
import Header from "../components/Header"
// Esporto La funzione ListPostsPages e la importo su app
export default function ListPostsPages() {
    return (<>
        
        <div className="set-title">
            <h1>PARTE DELLA ROTTA LIST POSTS</h1>
        </div>
        <Header />
        <ListPosts />
    </>

    )
}
