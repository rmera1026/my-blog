import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="./pictures/aboutme.jpg" alt=""></img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae accusantium alias non exercitationem itaque saepe velit nemo minus commodi
          adipisci, sapiente nisi cum quia facere.
        </p>
      </div>
      <div className="sidebarTitle">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Life</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  )
}
