import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="./pictures/postImg.jpeg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae vero aspernatur molestias quis distinctio adipisci amet blanditiis, maiores nemo aliquam maxime ea temporibus dicta officia nisi eligendi voluptate praesentium aliquid?
      </p>
    </div>
  )
}
