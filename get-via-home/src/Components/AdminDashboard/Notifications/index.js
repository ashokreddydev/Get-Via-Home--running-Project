import React from 'react';


class Notifications extends React.Component {
  render() {
    return (
      <section id="container" >
{/* header start  */}
<header className="header fixed-top clearfix">
{/* logo start  */}
<div className="brand">
    <a href="admin-dashboard.html" className="logo">
        <img src="images/main-logo.png" className="img-responsive" />
    </a>
    <div className="sidebar-toggle-box">
        <div className="fa fa-bars"></div>
    </div>
</div>
{/* logo end  */}

<div className="nav notify-row" id="top_menu">
    {/*   notification start   */}
    <ul className="nav top-menu">
        {/*  inbox dropdown start  */}
        <li id="header_inbox_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="fa fa-envelope-o custom-icon"></i>
                <span className="badge bg-important">4</span>
            </a>
            <ul className="dropdown-menu extended inbox">
                <li>
                    <p className="red">You have 4 Mails</p>
                </li>
                <li>
                    <a href="#">
                        <span className="photo"><img alt="avatar" src="images/avatar-mini.jpg" /></span>
                                <span className="subject">
                                <span className="from">Jonathan Smith</span>
                                <span className="time">Just now</span>
                                </span>
                                <span className="message">
                                    Hello, this is an example msg.
                                </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="photo"><img alt="avatar" src="images/avatar-mini-2.jpg" /></span>
                                <span className="subject">
                                <span className="from">Jane Doe</span>
                                <span className="time">2 min ago</span>
                                </span>
                                <span className="message">
                                    Nice admin template
                                </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="photo"><img alt="avatar" src="images/avatar-mini-3.jpg" /></span>
                                <span className="subject">
                                <span className="from">Tasi sam</span>
                                <span className="time">2 days ago</span>
                                </span>
                                <span className="message">
                                    This is an example msg.
                                </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="photo"><img alt="avatar" src="images/avatar-mini.jpg" /></span>
                                <span className="subject">
                                <span className="from">Mr. Perfect</span>
                                <span className="time">2 hour ago</span>
                                </span>
                                <span className="message">
                                    Hi there, its a test
                                </span>
                    </a>
                </li>
                <li>
                    <a href="#">See all messages</a>
                </li>
            </ul>
        </li>
        {/*  inbox dropdown end   */}
        {/*  notification dropdown start  */}
        <li id="header_notification_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">

                <i className="fa fa-bell-o custom-icon"></i>
                <span className="badge bg-warning">3</span>
            </a>
            <ul className="dropdown-menu extended notification">
                <li>
                    <p>Notifications</p>
                </li>
                <li>
                    <div className="alert alert-info clearfix">
                        <span className="alert-icon"><i className="fa fa-building"></i></span>
                        <div className="noti-info">
                            <a href="managecontact.html"> User3 Invested on Project 3.</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="alert alert-danger clearfix">
                        <span className="alert-icon"><i className="fa fa-building"></i></span>
                        <div className="noti-info">
                            <a href="managecontact.html"> User1 Selected Project 2.</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="alert alert-success clearfix">
                        <span className="alert-icon"><i className="fa fa-building"></i></span>
                        <div className="noti-info">
                            <a href="managecontact.html"> 2 Users Contacted on Project 8.</a>
                        </div>
                    </div>
                </li>

            </ul>
        </li>
        {/*  notification dropdown end   */}
    </ul>
    {/*   notification end   */}
</div>
<div className="top-nav clearfix">
    {/* search & user info start  */}
    <ul className="nav pull-right top-menu">
        {/*  <li>
            <input type="text" className="form-control search" placeholder=" Search">
        </li>   */}
        {/*  user login dropdown start  */}
        <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src="images/default.png" />
                <span className="username">Admin</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <li><a href="profile.html"><i className=" fa fa-suitcase"></i>Profile</a></li>
              
                <li><a href="index.html"><i className="fa fa-key"></i> Log Out</a></li>
            </ul>
        </li>
        {/*  user login dropdown end   */}
        {/*  <li>
            <div className="toggle-right-box">
                <div className="fa fa-bars"></div>
            </div>
        </li>   */}
    </ul>
    {/* search & user info end  */}
</div>
</header>
{/* header end  */}
<aside>
    <div id="sidebar" className="nav-collapse">
        {/*  sidebar menu start  */}
        <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">
                <li>
                    <a href="admin-dashboard.html">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="sub-menu">
                    <a href="javascript:;">
                        <i className="fa fa-building"></i>
                        <span>Projects</span>
                    </a>
                    <ul className="sub">    
                        <li className="active"><a href="AdminAddProject">Add Project</a></li>
                        <li><a href="AdminManageProject">Manage Project</a></li>
                        <li><a href="AdminManageProjectContactDetails">Manage Project Contact Details</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;">
                        <i className="fa fa-users"></i>
                        <span>User Management</span>
                    </a>
					<ul className="sub">
                        <li><a href="AdminManageUsers">Manage Users</a></li>
                    </ul>
                </li>
				<li>
                    <a href="AdminNotifications" className="active">
                        <i className="fa fa-comments"></i>
                        <span>Notifications</span>
                    </a>
                </li>
				<li>
                    <a href="AdminContactRequest">
                        <i className="fa fa-mobile"></i>
                        <span>Contact Request</span>
                    </a>
                </li>
            </ul>            </div>
        {/*  sidebar menu end  */}
    </div>
</aside>
{/* sidebar end  */}
    {/* main content start  */}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <a href="admin-dashboard.html">Dashboard</a>
                        </li>
                          <li>
                            <a className="current" href="notifications.html">Notifications</a>
                        </li>
                      
                    </ul>
                </div>
		</div>
        {/*  page start  */}
		<div className="row">
			<div className="notification-content">
				<a href="managecontact.html">
					<div className="alert alert-block alert-notification fade in">
						 <button data-dismiss="alert" className="close close-sm" type="button">
							<i className="fa fa-times"></i>
						 </button>
						 <strong>User 112 Invested on Project 5</strong>
					</div>
				</a>
				<a href="managecontact.html">
					<div className="alert alert-block alert-notification fade in">
						 <button data-dismiss="alert" className="close close-sm" type="button">
							<i className="fa fa-times"></i>
						 </button>
						 <strong>User 145 Invested on Project 4</strong>
					</div>
				</a>
				<a href="managecontact.html">
					<div className="alert alert-block alert-notification fade in">
						 <button data-dismiss="alert" className="close close-sm" type="button">
							<i className="fa fa-times"></i>
						 </button>
						 <strong>4 Users Contacted for Project 6</strong>
					</div>
				</a>
				<a href="managecontact.html">
					<div className="alert alert-block alert-notification fade in">
						 <button data-dismiss="alert" className="close close-sm" type="button">
							<i className="fa fa-times"></i>
						 </button>
						 <strong>User 173 Invested on Project 2</strong>
					</div>
				</a>
				<a href="managecontact.html">
					<div className="alert alert-block alert-notification fade in">
						 <button data-dismiss="alert" className="close close-sm" type="button">
							<i className="fa fa-times"></i>
						 </button>
						 <strong>8 Users Selected for Project 3</strong>
					</div>
				</a>
			</div>
		</div>
        {/*  page end  */}
        </section>
    </section>
    {/* main content end  */}


</section>

    );
  }
}

export default Notifications;