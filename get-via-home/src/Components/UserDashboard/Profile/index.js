import React  from 'react';



class Profile extends React.Component {
  render() {
      
   
    return (
        
<section id="container" >
{/* header start */}
<header className="header fixed-top clearfix">
{/* logo start */}
<div className="brand">
    <a href="admin-dashboard.html" className="logo">
        <img src="images/main-logo.png" alt="img" className="img-responsive" />
    </a>
    <div className="sidebar-toggle-box">
        <div className="fa fa-bars"></div>
    </div>
</div>
{/* logo end */}

<div className="nav notify-row" id="top_menu">
    {/*   notification start  */}
    <ul className="nav top-menu">
        {/*  inbox dropdown start */}
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
        {/*  inbox dropdown end  */}
        {/*  notification dropdown start */}
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
        {/*  notification dropdown end  */}
    </ul>
    {/*   notification end  */}
</div>
<div className="top-nav clearfix">
    {/* search & user info start */}
    <ul className="nav pull-right top-menu">
        {/*  <li>
            <input type="text" className="form-control search" placeholder=" Search">
        </li>  */}
        {/*  user login dropdown start */}
        <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src="images/default.png" />
                <span className="username">Admin</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <li><a href="Profile"><i className=" fa fa-suitcase"></i>Profile</a></li>
            
                <li><a href="/"><i className="fa fa-key"></i> Log Out</a></li>
            </ul>
        </li>
        {/*  user login dropdown end  */}
        {/*  <li>
            <div className="toggle-right-box">
                <div className="fa fa-bars"></div>
            </div>
        </li>  */}
    </ul>
    {/* search & user info end */}
</div>
</header>
{/* header end */}
<aside>
    <div id="sidebar" className="nav-collapse">
        {/*  sidebar menu start */}
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
                        <li><a href="addproject.html">Add Project</a></li>
                        <li><a href="manageprojects.html">Manage Project</a></li>
                        <li><a href="managecontact.html">Manage Project Contact Details</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;">
                        <i className="fa fa-users"></i>
                        <span>User Management</span>
                    </a>
					<ul className="sub">
                        <li><a href="manageusers.html">Manage Users</a></li>
                    </ul>
                </li>
				<li>
                    <a href="notifications.html">
                        <i className="fa fa-comments"></i>
                        <span>Notifications</span>
                    </a>
                </li>
				<li>
                    <a href="contactrequest.html">
                        <i className="fa fa-mobile"></i>
                        <span>Contact Request</span>
                    </a>
                </li>
            </ul>            </div>
        {/*  sidebar menu end */}
    </div>
</aside>
{/* sidebar end */}
    {/* main content start */}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <a href="#" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="current" href="Profile">Profile</a>
                        </li>
                        {/* <li>
                            <a className="current" href="#">Elements</a>
                        </li>  */}
                    </ul>
                </div>
		</div>
        {/*  page start */}

        <div className="row">
            <div className="col-md-12">
                <section className="panel">
                    <div className="panel-body profile-information">
                       <div className="col-md-3">
                           <div className="profile-pic text-center">
                               <img src="images/profile.png " alt=""/>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <div className="profile-desk">
                               <h1>Admin</h1>
                               <p>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor vestibulum imperdiet. Ut auctor accumsan erat, a vulputate metus tristique non. Aliquam aliquam vel orci quis sagittis.
                               </p>
                           </div>
                       </div>
                       <div className="col-md-3">
                           <div className="profile-statistics">
                               <h1>$1240</h1>
                               <p>This Week Sales</p>
                               <h1>$5,61,240</h1>
                               <p>This Week Earn</p>
                               <ul>
                                   <li>
                                       <a href="https://www.facebook.com">
                                           <i className="fa fa-facebook"></i>
                                       </a>
                                   </li>
                                   <li className="active">
                                       <a href="https://twitter.com/login">
                                           <i className="fa fa-twitter"></i>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="https://plus.google.com">
                                           <i className="fa fa-google-plus"></i>
                                       </a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                    </div>
                </section>
            </div>
            <div className="col-md-12">
                <section className="panel">
                    <header className="panel-heading tab-bg-dark-navy-blue profiletabs">
                        <ul className="nav nav-tabs nav-justified ">
                            <li>
                                <a data-toggle="tab" href="#contacts" className="contact-map">
                                    Contacts
                                </a>
                            </li>
                            <li className="active">
                                <a data-toggle="tab" href="#EditProfile">
                                    Edit Profile
                                </a>
                            </li>
                        </ul>
                    </header>
                    <div className="panel-body">
                        <div className="tab-content tasi-tab">
                            <div id="contacts" className="tab-pane ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="prf-contacts">
                                            <h2> <span><i className="fa fa-map-marker"></i></span> location</h2>
                                            <div className="location-info">
                                                <p>Postal Address<br/>
                                                    PO Box 16122 Collins Street West<br/>
                                                    Victoria 8007 Australia</p>
                                                <p>Headquarters<br/>
                                                    121 King Street, Melbourne<br/>
                                                    Victoria 3000 Australia</p>
                                            </div>
                                            <h2> <span><i className="fa fa-phone"></i></span> contacts</h2>
                                            <div className="location-info">
                                                <p>Phone	: +12345678901 <br/>
                                                    Cell		: +12345678901</p>
                                                <p>Email		: abc@getviahome.com<br/>
                                                    Skype		: abc.getviahome</p>
                                                <p>
                                                    Facebook	: https://www.facebook.com <br/>
                                                    Twitter	: https://twitter.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div id="map-canvas"></div>
                                    </div>
                                </div>
                            </div>
                            <div id="EditProfile" className="tab-pane active">
                                <div className="position-center">
                                    
                                    <form role="form" className="form-horizontal" id="reg-login">
									<div className="prf-contacts sttng prf-personal">
                                        <h2>  Personal Information</h2>
                                    </div>
									<div className="row">
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="First Name" type="text" required />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Last Name" type="text" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address" type="text" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Email" type="email" required />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="City/Town" type="text" required />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="prf-contacts sttng">
											<h2> social networks</h2>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Facebook" type="text" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Twitter" type="text" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Email" type="email" required />
											</div>
										</div>
										
									</div>
									<div className="row">
										<div className="prf-contacts sttng">
											<h2>Contact</h2>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address 1" type="text" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address 2" type="text" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Phone" type="text" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Cell" type="text" required />
											</div>
										</div>
									</div>
									<div className="text-center center-block profilebtns">
										<a href="Profile" className="main-btn">Cancel</a>
										<a href="Profile" className="main-btn">Update</a>
									</div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        {/*  page end */}
        </section>
    </section>
    {/* main content end */}
{/* right sidebar start */}
<div className="right-sidebar">
<div className="search-row">
    <input type="text" placeholder="Search" className="form-control" />
</div>
<div className="right-stat-bar">
<ul className="right-side-accordion">
<li className="widget-collapsible">
    <a href="#" className="head widget-head red-bg active clearfix">
        <span className="pull-left">work progress (5)</span>
        <span className="pull-right widget-collapse"><i className="ico-minus"></i></span>
    </a>
    <ul className="widget-container">
        <li>
            <div className="prog-row side-mini-stat clearfix">
                <div className="side-graph-info">
                    <h4>Target sell</h4>
                    <p>
                        25%, Deadline 12 june 13
                    </p>
                </div>
                <div className="side-mini-graph">
                    <div className="target-sell">
                    </div>
                </div>
            </div>
            <div className="prog-row side-mini-stat">
                <div className="side-graph-info">
                    <h4>product delivery</h4>
                    <p>
                        55%, Deadline 12 june 13
                    </p>
                </div>
                <div className="side-mini-graph">
                    <div className="p-delivery">
                        <div className="sparkline" data-type="bar" data-resize="true" data-height="30" data-width="90%" data-bar-color="#39b7ab" data-bar-width="5" data-data="[200,135,667,333,526,996,564,123,890,564,455]">
                        </div>
                    </div>
                </div>
            </div>
            <div className="prog-row side-mini-stat">
                <div className="side-graph-info payment-info">
                    <h4>payment collection</h4>
                    <p>
                        25%, Deadline 12 june 13
                    </p>
                </div>
                <div className="side-mini-graph">
                    <div className="p-collection">
						<span className="pc-epie-chart" data-percent="45">
						<span className="percent"></span>
						</span>
                    </div>
                </div>
            </div>
            <div className="prog-row side-mini-stat">
                <div className="side-graph-info">
                    <h4>delivery pending</h4>
                    <p>
                        44%, Deadline 12 june 13
                    </p>
                </div>
                <div className="side-mini-graph">
                    <div className="d-pending">
                    </div>
                </div>
            </div>
            <div className="prog-row side-mini-stat">
                <div className="col-md-12">
                    <h4>total progress</h4>
                    <p>
                        50%, Deadline 12 june 13
                    </p>
                    <div className="progress progress-xs mtop10">
                        <div  aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" role="progressbar" className="progress-bar progress-bar-info profile_demo3">
                            <span className="sr-only">50% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</li>
<li className="widget-collapsible">
    <a href="#" className="head widget-head terques-bg active clearfix">
        <span className="pull-left">contact online (5)</span>
        <span className="pull-right widget-collapse"><i className="ico-minus"></i></span>
    </a>
    <ul className="widget-container">
        <li>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/avatar1_small.jpg" alt="" /></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">Jonathan Smith</a></h4>
                    <p>
                        Work for fun
                    </p>
                </div>
                <div className="user-status text-danger">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/avatar1.jpg" alt="" /></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">Anjelina Joe</a></h4>
                    <p>
                        Available
                    </p>
                </div>
                <div className="user-status text-success">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/chat-avatar2.jpg" alt="" /></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">John Doe</a></h4>
                    <p>
                        Away from Desk
                    </p>
                </div>
                <div className="user-status text-warning">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/avatar1_small.jpg" alt="" /></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">Mark Henry</a></h4>
                    <p>
                        working
                    </p>
                </div>
                <div className="user-status text-info">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb">
                    <a href="#"><img src="images/avatar1.jpg" alt="" /></a>
                </div>
                <div className="user-details">
                    <h4><a href="#">Shila Jones</a></h4>
                    <p>
                        Work for fun
                    </p>
                </div>
                <div className="user-status text-danger">
                    <i className="fa fa-comments-o"></i>
                </div>
            </div>
            <p className="text-center">
                <a href="#" className="view-btn">View all Contacts</a>
            </p>
        </li>
    </ul>
</li>
<li className="widget-collapsible">
    <a href="#" className="head widget-head purple-bg active">
        <span className="pull-left"> recent activity (3)</span>
        <span className="pull-right widget-collapse"><i className="ico-minus"></i></span>
    </a>
    <ul className="widget-container">
        <li>
            <div className="prog-row">
                <div className="user-thumb rsn-activity">
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="rsn-details ">
                    <p className="text-muted">
                        just now
                    </p>
                    <p>
                        <a href="#">Jim Doe </a>Purchased new equipments for zonal office setup
                    </p>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb rsn-activity">
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="rsn-details ">
                    <p className="text-muted">
                        2 min ago
                    </p>
                    <p>
                        <a href="#">Jane Doe </a>Purchased new equipments for zonal office setup
                    </p>
                </div>
            </div>
            <div className="prog-row">
                <div className="user-thumb rsn-activity">
                    <i className="fa fa-clock-o"></i>
                </div>
                <div className="rsn-details ">
                    <p className="text-muted">
                        1 day ago
                    </p>
                    <p>
                        <a href="#">Jim Doe </a>Purchased new equipments for zonal office setup
                    </p>
                </div>
            </div>
        </li>
    </ul>
</li>
<li className="widget-collapsible">
    <a href="#" className="head widget-head yellow-bg active">
        <span className="pull-left"> shipment status</span>
        <span className="pull-right widget-collapse"><i className="ico-minus"></i></span>
    </a>
    <ul className="widget-container">
        <li>
            <div className="col-md-12">
                <div className="prog-row">
                    <p>
                        Full sleeve baby wear (SL: 17665)
                    </p>
                    <div className="progress progress-xs mtop10">
                        <div className="progress-bar progress-bar-success profile_demo1" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
                            <span className="sr-only">40% Complete</span>
                        </div>
                    </div>
                </div>
                <div className="prog-row">
                    <p>
                        Full sleeve baby wear (SL: 17665)
                    </p>
                    <div className="progress progress-xs mtop10">
                        <div className="progress-bar progress-bar-info profile_demo2" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span className="sr-only">70% Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</li>
</ul>
</div>
</div>
{/* right sidebar end */}

 </section>
   

  
    );
  }
}

export default Profile;
