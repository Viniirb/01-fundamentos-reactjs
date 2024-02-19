import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"


function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author= "Vinicius Rolim Barbosa" 
            content= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis hic nulla blanditiis ad laudantium quod officiis doloremque non consequatur, eos voluptate iusto facere unde fuga velit saepe quia dolor ea."
          />
    
          <Post 
            author= "Teste" 
            content= "Um novo posto muito legal!"
          />
        </main>
      </div>  
    </div>    
  )
}

export default App
