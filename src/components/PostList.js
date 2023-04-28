import React from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
const PostList = () => {
  const notlar = useSelector((state) => state.notlar);


  const dispatch = useDispatch();

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
