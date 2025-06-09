// import { useState } from "react"
import type { Post } from "../tyes"

export function BoxUserHome ({ datos } : {datos : Post}){
   return(
 <div className="BoxUserHome">
    <section className="BoxUserHome-info-user">
      <span className={`BoxUserHome-info-user-span ${datos.coverPhotoURL ? "photo" : ""}`}>
         <span>
            {datos.userName.length > 15 ? datos.userName.slice(0, 15) + "..." : datos.userName}
         </span>
         <img className="BoxUserHome-info-user-img" src={datos.profilePhotoURL ? `http://localhost:3000/image/${datos.idUser}` : "http://localhost:3000/imageDefault"}/>
      </span>
      {datos.coverPhotoURL ? (
         <img className="BoxUserHome-info-user-cover" src={`http://localhost:3000/coverPhoto/${datos.idUser}`}/>
      ) : ""}
      <span className="BoxUserHome-info-user-cover-shadow"></span>
    </section>
 </div>
   )

}




// export function BoxUserHome ({titulo, userImg, coverImg, name}){
//    return(
      
//     <section className="paint-notice">
//         <div className="back-gris"></div>
//         <div className="back-grisclaro">

//             <div className="line-blue">
//                 <div className="buttons">
//                     <div className="boton button-exit">
//                         <div className="button-back-gris"></div>
//                         <div className="button-back-grisclaro"></div>
//                         <div className="button-back-line-grisclaro"></div>
//                         <div className="button-back-line2-grisclaro"></div>
//                         <span className="boton-span button-span-icon button-span-x">
//                             <span className="a"></span>
//                             <span className="b"></span>
//                         </span>
//                     </div>
//                     <div className="boton button-max">
//                         <div className="button-back-gris"></div>
//                         <div className="button-back-grisclaro"></div>
//                         <div className="button-back-line-grisclaro"></div>
//                         <div className="button-back-line2-grisclaro"></div>
//                         <span className="boton-span button-span-icon button-span-cube">
//                             <span className="a"></span>
//                         </span>
//                     </div>
//                     <div className="boton button-min">
//                         <div className="button-back-gris"></div>
//                         <div className="button-back-grisclaro"></div>
//                         <div className="button-back-line-grisclaro"></div>
//                         <div className="button-back-line2-grisclaro"></div>
//                         <span className="boton-span button-span-icon button-span-barra">
//                             <span className="a"></span>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             {/* <div className="line-menu">
//                 <div className="name-menu file">File<span class="dec-name-menu"></span></div>
//                 <div className="name-menu edit">Edit<span class="dec-name-menu"></span></div>
//                 <div className="name-menu view">View<span class="dec-name-menu"></span></div>
//                 <div className="name-menu image">Image<span class="dec-name-menu"></span></div>
//                 <div className="name-menu option">Option<span class="dec-name-menu"></span></div>
//                 <div className="name-menu help">Help<span class="dec-name-menu"></span></div>
//             </div> */}
//       <section className="BoxUserHome-info-user">
//        <span className="BoxUserHome-info-user-span">
//           {/* <strong>{name}</strong> */}
//           <span>{titulo}</span>
//        </span>
//        <img className="BoxUserHome-info-user-img" src={userImg} alt="" srcset="" />
//        <img className="BoxUserHome-info-user-cover" src={coverImg} alt="" srcset="" />
//        <span className="BoxUserHome-info-user-cover-shadow"></span>
//      </section>
//         </div>


//     </section>
//    )

// }