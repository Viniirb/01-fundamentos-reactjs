import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'


function App() {

  return (
    <div>
      <Header />

      <Post 
      author= "Vinicius Rolim Barbosa" 
      content= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis hic nulla blanditiis ad laudantium quod officiis doloremque non consequatur, eos voluptate iusto facere unde fuga velit saepe quia dolor ea."
    />
    
    <Post 
      author= "Teste" 
      content= "Um novo posto muito legal!"
    />
    

    </div>    
  )
}

export default App
