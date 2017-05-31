import React  from 'react';



class RequestProject extends React.Component {
  render() {
      
   
    return (
        
        
        <section id="container" >
{/*header start*/}
<header className="header fixed-top clearfix">
{/*logo start*/}
<div className="brand">
    <a href="UserDashboard" className="logo">
        <img src="images/main-logo.png" className="img-responsive" />
    </a>
    <div className="sidebar-toggle-box">
        <div className="fa fa-bars"></div>
    </div>
</div>
{/*logo end*/}

<div className="nav notify-row" id="top_menu">
    {/*  notification start */}
    <ul className="nav top-menu">
        {/* notification dropdown start*/}
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
                            <a href="RequestProject"> User3 Invested on Project 3.</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="alert alert-danger clearfix">
                        <span className="alert-icon"><i className="fa fa-building"></i></span>
                        <div className="noti-info">
                            <a href="RequestProject"> User1 Selected Project 2.</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="alert alert-success clearfix">
                        <span className="alert-icon"><i className="fa fa-building"></i></span>
                        <div className="noti-info">
                            <a href="RequestProject"> 2 Users Contacted on Project 8.</a>
                        </div>
                    </div>
                </li>

            </ul>
        </li>
        {/* notification dropdown end */}
    </ul>
    {/*  notification end */}
</div>
<div className="top-nav clearfix">
    {/*search & user info start*/}
    <ul className="nav pull-right top-menu">
        {/* <li>
            <input type="text" className="form-control search" placeholder=" Search">
        </li> */}
        {/* user login dropdown start*/}
        <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src="images/default.png" />
                <span className="username">User</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <li><a href="Profile"><i className=" fa fa-suitcase"></i>Profile</a></li>
              
                <li><a href="/"><i className="fa fa-key"></i> Log Out</a></li>
            </ul>
        </li>
        {/* user login dropdown end */}
        {/* <li>
            <div className="toggle-right-box">
                <div className="fa fa-bars"></div>
            </div>
        </li> */}
    </ul>
    {/*search & user info end*/}
</div>
</header>
{/*header end*/}
<aside>
    <div id="sidebar" className="nav-collapse">
        {/* sidebar menu start*/}
        <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">
                <li>
                    <a href="UserDashboard">
                        <i className="fa fa-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="sub-menu">
                    <a href="javascript:;" className="active">
                        <i className="fa fa-building"></i>
                        <span>Projects</span>
                    </a>
                    <ul className="sub">
                        <li className="active"><a href="BrowseProjects">Browse Projects</a></li>
                        <li><a href="ViewSelectedProjects">View Selected Projects</a></li>
                        <li><a href="ViewInvestedProjects">View Invested Projects</a></li>
                        <li><a href="ViewContactedProjects">View Contacted Projects</a></li>
                    </ul>
                </li>
                <li>
                    <a href="ManageContactRequests">
                        <i className="fa fa-users"></i>
                        <span>Manage Contact Requests</span>
                    </a>
                </li>
            </ul>            </div>
        {/* sidebar menu end*/}
    </div>
</aside>
{/*sidebar end*/}
    {/*main content start*/}
    <section id="main-content">
        <section className="wrapper">
		<div className="row">
			<div className="col-md-12">
                    <ul className="breadcrumbs-alt">
                        <li>
                            <a href="UserDashboard" className="">Dashboard</a>
                        </li>
                         <li>
                            <a className="" href="BrowseProjects">Browse Projects</a>
                        </li>
                        <li>
                            <a className="current" href="RequestProject">Request Project</a>
                        </li> 
                    </ul>
                </div>
		</div>
        {/* page start*/}
		<div className="row">
			<div className="card project-desc">
			<div className="container-fliud">
				<div className="row">
						<div className="details col-md-6">
						<h2 className="main-color">Project 1 <span className="label label-default mr-5">Available</span></h2> 
						<p className="desc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<p className="desc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
						<p className="tags">Tags :&nbsp;&nbsp;&nbsp;
						<span className="label label-default main-bg">property&nbsp;&nbsp;</span>
						<span className="label label-default main-bg">property 1</span></p>
						<p className="margintop">
						<span className="main-color price">$23,983.00</span><br />
						<span className="success">Discount 8%</span>
						</p>

					</div>
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src="images/properties/property-1.png" /></div>
						  <div className="tab-pane" id="pic-2"><img src="images/properties/property-2.png"/></div>
						  <div className="tab-pane" id="pic-3"><img src="images/properties/property-3.png"/></div>
						  <div className="tab-pane" id="pic-4"><img src="images/properties/property-4.png"/></div>
						  <div className="tab-pane" id="pic-5"><img src="images/properties/property-5.png"/></div>
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="images/properties/property-1.png" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="images/properties/property-2.png"/></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="images/properties/property-3.png"/></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="images/properties/property-4.png"/></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="images/properties/property-5.png"/></a></li>
						</ul>	
						</div>
				</div>
			</div>
			
				<a href="#" className="main-btn">Request</a>
			
		</div>
		</div>

        {/* page end*/}
        </section>
    </section>
    {/*main content end*/}


</section>

   

  
    );
  }
}

export default RequestProject;
