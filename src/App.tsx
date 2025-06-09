import { useState, useEffect } from 'react'
import BoxHome from './components/BoxHome.tsx'
import type { Post } from './tyes'
import './components/style-home-box.css'
import './components/style-home-user-box.css'

function App() {

  const API_URL = 'http://localhost:3000'

  const [post, setPosts] = useState<Post[]>([])


useEffect(() => {
  fetchUsers()
}, [])

    async function fetchUsers() {


      async function usuarioDatos() {
        try {
          const response = await fetch(`${API_URL}/usersPost`);
          if (!response.ok) {
            throw new Error('El server ha fallado con el estado: ' + response.status);
          }
            const data = await response.json();
            setPosts(data.data);
      } catch (error) {
        console.error('El fetch ha fallado:', error);
      } 
      }




      usuarioDatos()
    }
  const [activeId, setActiveId] = useState<number | null>(null);
    function MapItem(){ 
        const item = post.length > 0 ? (
          post.map((posts)=>(
            <BoxHome
            key={posts.idPost}
            datos={posts}
            isActive={activeId === posts.idPost}
            onActivate={(act : boolean) => act ? setActiveId(posts.idPost) : setActiveId(null)}
             />
          ))
        ) : (
          <span style={{left: "50%", top : "150px", color: "#222", transform : "translateX(-50%)", fontSize : "20px", position : "absolute"}}>Cargando...</span>
        )
      
      return(
          <div>
            {item}
          </div>
        )
    }



  return (
    <>
    <section className="pag-home">
        <section className="header">
            <div className="header-menu">
                <span className="content-header-menu">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                </span>
            </div>
             <span className="header-title">01101000 01101100 01100001</span>
            <div className="header-user">
                <span className="header-user-span"></span>
            </div>
        </section>
          <section className="home">
            <MapItem/>
          </section>
        <section className="footer">Footer</section> 
    </section>
    </>
  )
}

export default App
