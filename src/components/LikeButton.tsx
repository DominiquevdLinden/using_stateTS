import React, { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_liked = false;
  const [liked, set_Liked] = useState(initial_liked); // <- using state!

  const like = () => {
    if (liked) {
      set_Liked(false);
    } else if (!liked) {
      set_Liked(true);
    }
  };

  return (
    <div>
      <button onClick={like}>
        {liked ? "You've liked this. Click to unlike" : "Like this!"}
      </button>
    </div>
  );
}
