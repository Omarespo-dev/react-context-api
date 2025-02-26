// Importo ListPostsPages
import ListPostsPages from "./pages/ListPostsPages";
// Importo i dettagli
import PostsDetails from "./pages/PostsDetails";
// Importo I componenti del router
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";


function App() {


  return (

    <BrowserRouter>

      <Routes>
        <Route >
          
          {/* LIsta post */}
          <Route path="/"element={<ListPostsPages />} />
          <Route path="/listposts/:id" element={<PostsDetails />} />
        
        
        </Route>

      </Routes>

    </BrowserRouter>


  )
}

export default App
