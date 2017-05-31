import React  from 'react';



class Dashboard extends React.Component {
  render() {
      
   
    return (
   

<section id="container" >
{/* header start */}
<header className="header fixed-top clearfix">
{/* logo start */}
<div className="brand">
    <a href="UserDashboard" className="logo">
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
                        <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                        <div className="noti-info">
                            <a href="#"> Server #1 overloaded.</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="alert alert-danger clearfix">
                        <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                        <div className="noti-info">
                            <a href="#"> Server #2 overloaded.</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="alert alert-success clearfix">
                        <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                        <div className="noti-info">
                            <a href="#"> Server #3 overloaded.</a>
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
                <span className="username">User</span>
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
                    <a className="active" href="UserDashboard">
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
                <li>
                    <a href="ManageContactRequests">
                        <i className="fa fa-users"></i>
                        <span>Manage Contact Requests</span>
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
                            <a href="UserDashboard" className="current">Dashboard</a>
                        </li>
                        {/*  <li>
                            <a className="active-trail active" href="#">Pages</a>
                        </li>
                        <li>
                            <a className="current" href="#">Elements</a>
                        </li>  */}
                    </ul>
                </div>
		</div>
        {/*  page start */}
		<div className="row">
    <div className="col-md-4">
        <div className="mini-stat clearfix">
            <span className="mini-stat-icon main-bg"><i className="fa fa-building"></i></span>
            <div className="mini-stat-info">
                <span>1042</span>
                <p>Total Projects</p>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="mini-stat clearfix">
            <span className="mini-stat-icon secondary-bg"><i className="fa fa-check-square-o"></i></span>
            <div className="mini-stat-info">
                <span>893</span>
                Accepted Projects
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="mini-stat clearfix">
            <span className="mini-stat-icon third-bg"><i className="fa fa-sign-in"></i></span>
            <div className="mini-stat-info">
                <span>482</span>
                Requested Projects
            </div>
        </div>
    </div>
</div>


<section className="panel recentprojects">
                    <header className="panel-heading main-bg">
                        Recent Projects
                        <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>

                         </span>
                    </header>
                    <div className="panel-body">
							<div className="row">
            <div className="col-md-4">
                {/*  Controls  */}
                <div className="controls hidden-xs">
                    <a className="left fa fa-chevron-left btn btn" href=".carousel-example"
                        data-slide="prev"></a><a className="right fa fa-chevron-right btn" href=".carousel-example"
                            data-slide="next"></a>
                </div>
            </div>
			<div className="col-md-3 pull-right">
        {/*<a href="#" className="main-btn pull-right custom-btn">View All</a>*/}
			</div>
        </div>
        <div className="carousel slide  carousel-example" data-ride="carousel">
            {/*  Wrapper for slides  */}
            <div className="carousel-inner">
                <div className="item active">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="info">
                                    <div className="row">
                                        <div className="price col-md-6">
                                            <h4>Project 1</h4>
                                            <h5 className="price-text-color">$24234.99</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="photo">
                                    <img src="images/properties/property-1.png" className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="separator clear-left">
                                        
                                        <p className="btn-details">
                                            <i className="fa fa-list"></i><a href="RequestProject">More details</a>
                                        </p>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="info">
                                    <div className="row">
                                        <div className="price col-md-6">
                                            <h4>Project 2</h4>
                                            <h5 className="price-text-color">$78912.99</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="photo">
                                    <img src="images/properties/property-2.png" className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="separator clear-left">
                                        
                                        <p className="btn-details">
                                            <i className="fa fa-list"></i><a href="RequestProject">More details</a>
                                        </p>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="info">
                                    <div className="row">
                                        <div className="price col-md-6">
                                            <h4>Project 3</h4>
                                            <h5 className="price-text-color">$23377.58</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="photo">
                                    <img src="images/properties/property-3.png" className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="separator clear-left">
                                        
                                        <p className="btn-details">
                                            <i className="fa fa-list"></i><a href="RequestProject">More details</a>
                                        </p>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="info">
                                    <div className="row">
                                        <div className="price col-md-6">
                                            <h4>Project 4</h4>
                                            <h5 className="price-text-color">$32347.75</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="photo">
                                    <img src="images/properties/property-4.png" className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="separator clear-left">
                                        
                                        <p className="btn-details">
                                            <i className="fa fa-list"></i><a href="RequestProject">More details</a>
                                        </p>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="info">
                                    <div className="row">
                                        <div className="price col-md-6">
                                            <h4>Project 5</h4>
                                            <h5 className="price-text-color">$72387.17</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="photo">
                                    <img src="images/properties/property-5.png" className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="separator clear-left">
                                        
                                        <p className="btn-details">
                                            <i className="fa fa-list"></i><a href="RequestProject">More details</a>
                                        </p>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="info">
                                    <div className="row">
                                        <div className="price col-md-6">
                                            <h4>Project 6</h4>
                                            <h5 className="price-text-color">$19755.99</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="photo">
                                    <img src="images/properties/property-6.png" className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="separator clear-left">
                                        
                                        <p className="btn-details">
                                            <i className="fa fa-list"></i><a href="RequestProject">More details</a>
                                        </p>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="info">
                                    <div className="row">
                                        <div className="price col-md-6">
                                            <h4>Project 7</h4>
                                            <h5 className="price-text-color">$86322.99</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="photo">
                                    <img src="images/properties/property-7.png" className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="separator clear-left">
                                        
                                        <p className="btn-details">
                                            <i className="fa fa-list"></i><a href="RequestProject">More details</a>
                                        </p>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="col-item">
                                <div className="info">
                                    <div className="row">
                                        <div className="price col-md-6">
                                            <h4>Project 8</h4>
                                            <h5 className="price-text-color">$33764.09</h5>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="photo">
                                    <img src="images/properties/property-8.png" className="img-responsive" alt="a" />
                                </div>
                                <div className="info">
                                    <div className="separator clear-left">
                                        <p className="btn-details">
                                            <i className="fa fa-list"></i><a href="RequestProject">More details</a>
                                        </p>
                                    </div>
                                    <div className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    </div>
                </section>

<section className="panel recent-project">
                    <header className="panel-heading main-bg">
                        Projects List
                        <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            
                         </span>
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
								<th width="100"></th>
                                <th> Project Name</th>
                                <th className="hidden-phone">Descrition</th>
                                <th>Cost Estimate</th>
                                <th>Total Contacted</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
								<td><img src="images/properties/property-1.png" className="img-responsive"/></td>
                                <td><a href="RequestProject">Project 1</a></td>
                                <td className="hidden-phone">Lorem Ipsum dorolo imit</td>
                                <td>25276.00$ </td>
                                <td>22 Members</td>
                                <td>
									<div className="text-center center-block">
                                     <a href="RequestProject" className="main-btn select-btn">Select</a>
									</div>
								</td>
                            </tr>
                            <tr>
								<td><img src="images/properties/property-2.png" className="img-responsive" /></td>
                                <td><a href="RequestProject">Project 2</a></td>
                                <td className="hidden-phone">Lorem Ipsum dorolo imit</td>
                                <td>73344.00$ </td>
                                <td>153 Members</td>
                                <td><div className="text-center center-block">
										<a href="RequestProject" className="main-btn select-btn">Select</a>
									</div></td>
                                </tr>
							<tr>
								<td><img src="images/properties/property-3.png" alt="img" className="img-responsive"/></td>
                                <td><a href="RequestProject">Project 3</a></td>
                                <td className="hidden-phone">Lorem Ipsum dorolo imit</td>
                                <td>15321.00$ </td>
                                <td>41 Members</td>
                                <td><div className="text-center center-block">
										<a href="RequestProject" className="main-btn select-btn">Select</a>
									</div></td>
                            </tr>
							<tr>
								<td><img src="images/properties/property-4.png" alt="img" className="img-responsive"/></td>
                                <td><a href="RequestProject">Project 4</a></td>
                                <td className="hidden-phone">Lorem Ipsum dorolo imit</td>
                                <td>45279.00$ </td>
                                <td>84 Members</td>
                                <td><div className="text-center center-block">
										<a href="RequestProject" className="main-btn select-btn">Select</a>
									</div></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>




        {/*  page end */}
        </section>
    </section>
    {/* main content end */}


</section>
  
    );
  }
}

export default Dashboard;
