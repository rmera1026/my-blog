import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg"
        src="./pictures/blogImg.jpeg"
        alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
          <i className="singlePostIcon fas fa-edit"></i>
          <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Ronald Mera</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt nesciunt suscipit nostrum iure, doloribus repellat,
          illo laborum repellendus explicabo enim consequatur esse,
          amet accusantium est perferendis omnis. Sunt, cumque deserunt.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt nesciunt suscipit nostrum iure, doloribus repellat,
          illo laborum repellendus explicabo enim consequatur esse,
          amet accusantium est perferendis omnis. Sunt, cumque deserunt.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt nesciunt suscipit nostrum iure, doloribus repellat,
          illo laborum repellendus explicabo enim consequatur esse,
          amet accusantium est perferendis omnis. Sunt, cumque deserunt.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt nesciunt suscipit nostrum iure, doloribus repellat,
          illo laborum repellendus explicabo enim consequatur esse,
          amet accusantium est perferendis omnis. Sunt, cumque deserunt.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt nesciunt suscipit nostrum iure, doloribus repellat,
          illo laborum repellendus explicabo enim consequatur esse,
          amet accusantium est perferendis omnis. Sunt, cumque deserunt.
          </p>
      </div>
    </div>
  )
}
