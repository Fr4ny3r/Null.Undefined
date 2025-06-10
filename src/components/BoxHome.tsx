
import { useState } from 'react';
import { BoxUserHome } from "./BoxUserHome";
import type { Post } from '../tyes'


// function BoxHome({username = "Unknown", name = "Unknown", title = "", userImg="", coverImg="", postImg=""}) {
function BoxHome({ datos, isActive, onActivate }: { datos: Post, isActive: boolean, onActivate: (act : boolean) => void }) {

    const [vvalorBoleano, fvalorBoleano ] = useState(false)
//    const [focus, setFocus] = useState<number>()
    // const [onfocus, isFocused] = useState<boolean>(false)
    


    // const [toggleDesc, setToggleDesc] = useState<boolean>(false)
    
    // const handleToggleDesc = ()=>{
    //     setToggleDesc(!toggleDesc)
    // }

    const handleClick = ()=>{
        vvalorBoleano ? onActivate(false) : onActivate(true)
        fvalorBoleano(!vvalorBoleano) 
    }

    


  return(
    <div
        className={`box-home ${isActive ? "box-home-user" : ""}`}
        id={`${datos.idPost}`}
        onFocus={()=>{console.log(datos.idPost)}}

    >
        {/* {vvalorBoleano ? <BoxUserHome datos={datos}  /> : ""} */}
        {isActive && <BoxUserHome datos={datos} />}
        <div className="target-home">
            <div className={`target-home-title ${!datos.mediaURLPhoto  || !datos.contentDesc ? "title-without-desc" : ""}`}>
                <span>{datos.contentTitle}</span>
            </div>

            <div className={`target-home-user ${!datos.mediaURLPhoto ? "name-without-desc" : ""}`}>
                <div className="target-home-user-nombres"  onClick={handleClick} >
                    <strong className="target-home-user-nickname" >{datos.userName.length > 15 ? datos.userName.slice(0, 15) + "..." : datos.userName}</strong>
                    <span className="target-home-user-arroba" >{datos.nickName}</span>
                </div>
                {/* <img src={datos.profilePhotoURL} onClick={handleClick}/> */}
                <img src={datos.profilePhotoURL ? `http://localhost:3000/image/${datos.idUser}` : "http://localhost:3000/imageDefault"} onClick={handleClick}/>
            </div>

            <div className="target-home-content">
                <div className="target-home-content-img">
                    <img src={datos.mediaURLPhoto ? `http://localhost:3000/postMediaPhoto/${datos.idPost}` : ""} alt=""/>
                </div>
            </div>


            {datos.contentDesc ? (
                <div className="target-home-desc">
                    <div className="target-home-desc-box">
                        <span>Descripción</span>
                        <p>{datos.contentDesc}</p>
                    </div>
                </div>
            ) : ""}


            <div className="target-home-info">

                <div className="target-home-info-box">

                    <div className="target-home-info-comentarios">
                            <input type="text" className="target-home-info-comentarios-input" placeholder="Comenta algo chistoso :v"/>
                        <div className="target-home-info-comentarios-boton">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-send-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>
                        </div>
                    </div>

                    <div className="target-home-info-comentarios-config">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </div>

                    <div className="target-home-info-reacciones-box">
                        <div className="target-home-info-reacciones">
                            <span>:(</span>
                            <span>:(</span>
                            <span>:(</span>
                            <span>:(</span>
                            <span>:(</span>
                            <span>:(</span>
                        </div>

                        <div className="target-home-info-reacciones-plus">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mood-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.985 12.528a9 9 0 1 0 -8.45 8.456" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" /></svg>
                        </div>

                    </div>

                </div>

            </div>

        </div>
                    
    </div>



            
  )

}


export default BoxHome;