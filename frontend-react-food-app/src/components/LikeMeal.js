import React,  {useState} from 'react';
import likedImg from "./img/liked.png";
import likeImg from "./img/like.png";
import unLikeImg from "./img/dislike.png"
import unLikedImg from "./img/thumb-down.png"

function LikeMeal() {
const [like, setLike] = useState(false)
const [unLike, setUnLike] = useState(false)

    return(
        <div className="LikeMeal">
            <button onClick={()=>setLike(!like)} className="active-like">
            
                {like ? <img src={likedImg} 
                alt ="liked thumb" /> 
                : <img src={likeImg} 
                alt ="like thumb" />
              }
            
            </button>

            <button onClick={()=>setUnLike(!unLike)} className="active-unLike">
            
                {unLike ? <img src= {unLikedImg}
                alt ="unliked thumb" /> 
                : <img src={unLikeImg}
                alt ="unlike thumb" />
              }
            
            </button>

        

       
        </div>
    )

}
export default LikeMeal;

