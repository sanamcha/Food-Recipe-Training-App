// import React, { useState, useEffect, useContext } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import UserContext from "../users/UserContext";
// import likedImg from "./img/thumb-up.png";
// import likeImg from "./img/like.png";


// const LikePost =({ m }) => {
//     const { hasLiked, likes } = useContext(UserContext);
//     const [liked, setLiked] = useState();
//     const {id} = useParams();
//     useEffect( async function updateLikedStatus(){
//         console.debug("updateLikedStatus", "id=", id)
        
//         setLiked(hasLiked(id));
        
//        }, [id, hasLiked]);
    
//        //click on like btn
//        async function handleLike(e){
//            if(hasLiked(id)) return;
//            likes(id);
//            setLiked(true);
    
//        }

//     return (
//         <div>{liked}

//             <button
//                className="btn btn-info "
//                onClick={handleLike}
//                disabled={liked} 
//                >
//                {liked ? <img src={likedImg} 
//                      alt ="liked thumb" /> 
//                      : <img src={likeImg} 
//                      alt ="like thumb" />
//                    }
//             </button>
//         </div>
//     )



// }

// export default LikePost;