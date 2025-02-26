// Importo ListPostsPages
import ListPostsPages from "./pages/ListPostsPages";
// Importo i dettagli
import PostsDetails from "./pages/PostsDetails";
// importo provider
import CountContext from './contexts/CountContext';


// Importo I componenti del router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



// gestione dati posts 
import { useState, useEffect } from 'react';
import axios from "axios";





function App() {
  
//1 Ora vado a utilizzare lo useState perche mi permette di prendere l array di oggetti e catturarne l evento.
const [list, setlist] = useState([])
// -- list e l array di oggetti e setlist vado ad aggiornare quello array di ogetti


// 6 Ora andiamo a fare una funzione che fa una richiesta API di tipo get
function fetchTodos() {
  axios.get("http://localhost:3000/posts")
    .then((res) => setlist(res.data))

}

useEffect(fetchTodos, [])

  return (
    <CountContext.Provider value={{list,  setlist}}>
      <BrowserRouter>

        <Routes>
          <Route >

            {/* LIsta post */}
            <Route path="/" element={<ListPostsPages />} />
            <Route path="/listposts/:id" element={<PostsDetails />} />


          </Route>

        </Routes>

      </BrowserRouter>

    </CountContext.Provider>



  )
}

export default App
