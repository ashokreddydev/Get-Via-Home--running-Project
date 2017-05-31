import React  from 'react';



class ManageContactRequests extends React.Component {
  render() {
      
   
    return (
        <div>
        
<section id="container" >
{/*header start*/}
<header className="header fixed-top clearfix">
{/*logo start*/}
<div className="brand">
    <a href="UserDashboard" className="logo">
        <img src="images/main-logo.png" alt="img" className="img-responsive" />
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
                    <a href="javascript:;">
                        <i className="fa fa-building"></i>
                        <span>Projects</span>
                    </a>
                    <ul className="sub">
                        <li><a href="BrowseProjects">Browse Projects</a></li>
                        <li><a href="ViewSelectedProjects">View Selected Projects</a></li>
                        <li><a href="ViewInvestedProjects">View Invested Projects</a></li>
                        <li><a href="ViewContactedProjects">View Contacted Projects</a></li>
                    </ul>
                </li>
                <li >
                    <a href="ManageContactRequests" className="active">
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
                            <a className="current" href="ManageContactRequests">Manage Contact Requests</a>
                        </li>
                      {/*   <li>
                            <a className="current" href="#">Request Project</a>
                        </li>  */}
                    </ul>
					
					<div id="sb-search" className="sb-search">
						<form>
							<input className="sb-search-input" placeholder="Enter your search term..." type="text" value="" name="search" id="search" />
							<input className="sb-search-submit" type="submit" value="" />
							<span className="sb-icon-search"></span>
						</form>
					</div>
                </div>
		</div>
        {/* page start*/}
			<section className="panel">
                    <header className="panel-heading main-bg">
                        Manage Contact Requests
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th>Name</th>
                                <th>Email</th>
                                <th>Name of the Project</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
								<td>David</td>
                                <td>david@hotmail.com</td>
                                <td>Sample</td>
                                <td>Accepted</td>
                                <td>
									<a href="#"  data-placement="top" data-toggle="tooltip" className="tooltips" data-original-title="Cancel"><img src="images/remove1.png" /></a>
								</td>
                            </tr>
                           <tr>
								<td>John</td>
                                <td>john@hotmail.com</td>
                                <td>Sample</td>
                                <td>Rejected</td>
                                <td>
									<a href="#"  data-placement="top" data-toggle="tooltip" className="tooltips" data-original-title="Cancel"><img src="images/remove1.png" /></a>
								</td>
                            </tr>
							<tr>
								<td>Loy</td>
                                <td>loy@yahoo.com</td>
                                <td>Sample</td>
                                <td>Waiting</td>
                                <td>
									<a href="#"  data-placement="top" data-toggle="tooltip" className="tooltips" data-original-title="Cancel"><img src="images/remove1.png" /></a>
								</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
        {/* page end*/}
        </section>
    </section>
    {/*main content end*/}


</section>

{/* Placed js at the end of the document so the pages load faster */}

{/*Core js*/}
<script src="js/jquery.js"></script>
<script src="bs3/js/bootstrap.min.js"></script>
<script className="include" type="text/javascript" src="js/jquery.dcjqaccordion.2.7.js"></script>
<script src="js/jquery.scrollTo.min.js"></script>
<script src="js/jQuery-slimScroll-1.3.0/jquery.slimscroll.js"></script>
<script src="js/jquery.nicescroll.js"></script>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>


{/*common script init for all pages*/}
<script src="js/scripts.js"></script>

<script src="js/modernizr.custom.js"></script>

<script src="js/classNameie.js"></script>
<script src="js/uisearch.js"></script>

<script>
			new UISearch( document.getElementById( 'sb-search' ) );
		</script>


        </div>
   




    );
  }
}
 const script = document.createElement('sb-search');
      script.src = "js/uisearch.js";
        script.async = true;


export default ManageContactRequests;

