import React  from 'react';





class ViewSelectedProjects extends React.Component {
  render() {
      
   
    return (
        <section id="container" >
{/* header start  */}
<header className="header fixed-top clearfix">
{/* logo start  */}
<div className="brand">
    <a href="UserDashboard" className="logo">
        <img src="images/main-logo.png" alt="img"className="img-responsive" />
    </a>
    <div className="sidebar-toggle-box">
        <div className="fa fa-bars"></div>
    </div>
</div>
{/* logo end  */}

<div className="nav notify-row" id="top_menu">
    {/*   notification start   */}
    <ul className="nav top-menu">
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
                <span className="username">User</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <li><a href="Profile"><i className=" fa fa-suitcase"></i>Profile</a></li>
              
                <li><a href="/"><i className="fa fa-key"></i> Log Out</a></li>
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
                        <li><a href="BrowseProjects">Browse Projects</a></li>
                        <li className="active"><a href="ViewSelectedProjects">View Selected Projects</a></li>
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
                            <a href="DashBoard" className="">Dashboard</a>
                        </li>
                        <li>
                            <a className="current" href="ViewSelectedProjects">View Selected Projects</a>
                        </li> 
                    </ul>
                </div>
		</div>
        {/*  page start  */}
        <div className="row">
			<div className="card project-desc">
			<div className="container-fliud">
				<div className="row">
						
					<div className="col-md-7">
			
			<div id="jssor_1" className="jssor_1_demo1">
        {/*  Loading Screen   */}
        <div data-u="loading" className="jssor_1_demo2">
            <div className="jssor_1_demo3"></div>
            <div className="jssor_1_demo4"></div>
        </div>
        <div data-u="slides" className="jssor_1_demo5">
            <div>
                <img data-u="image" src="images/01.jpg" />
                <img data-u="thumb" src="images/thumb-01.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/02.jpg" />
                <img data-u="thumb" src="images/thumb-02.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/03.jpg" />
                <img data-u="thumb" src="images/thumb-03.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/04.jpg" />
                <img data-u="thumb" src="images/thumb-04.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/05.jpg" />
                <img data-u="thumb" src="images/thumb-05.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/06.jpg" />
                <img data-u="thumb" src="images/thumb-06.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/07.jpg" />
                <img data-u="thumb" src="images/thumb-07.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/08.jpg" />
                <img data-u="thumb" src="images/thumb-08.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/09.jpg" />
                <img data-u="thumb" src="images/thumb-09.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/10.jpg" />
                <img data-u="thumb" src="images/thumb-10.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/11.jpg" />
                <img data-u="thumb" src="images/thumb-11.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/12.jpg" />
                <img data-u="thumb" src="images/thumb-12.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/13.jpg" />
                <img data-u="thumb" src="images/thumb-13.jpg" />
            </div>
            <div>
                <img data-u="image" src="images/14.jpg" />
                <img data-u="thumb" src="images/thumb-14.jpg" />
            </div>
            <a data-u="any" href="http://www.jssor.com" className="jssor_1_demo6">Image Gallery with Vertical Thumbnail</a>
        </div>
        {/*  Thumbnail Navigator   */}
        <div data-u="thumbnavigator" className="jssort01-99-66 jssor_1_demo7" >
            {/*  Thumbnail Item Skin Begin   */}
            <div data-u="slides" className="jssor_1_demo8">
                <div data-u="prototype" className="p">
                    <div className="w">
                        <div data-u="thumbnailtemplate" className="t"></div>
                    </div>
                    <div className="c"></div>
                </div>
            </div>
            {/*  Thumbnail Item Skin End   */}
        </div>
        {/*  Arrow Navigator   */}
        <span data-u="arrowleft" className="jssora05l jssor_1_demo9" data-autocenter="2"></span>
        <span data-u="arrowright" className="jssora05r jssor_1_demo10"  data-autocenter="2"></span>
    </div>
		</div>
		<div className="details col-md-5">
						<h2 className="main-color">Project 1</h2> 
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
				</div>
				<div className="row">
					<h3 className="main-color">View Selected Projects :</h3>
					<h3 className="main-color">Location</h3>
					<div className="col-md-3">
						Enter City :
					</div>
					<div className="col-md-3">
						<p className="main-color">New York</p>
					</div>
					<div className="col-md-3">
						Locality :
					</div>
					<div className="col-md-3">
						 <p className="main-color">Mountain View</p>
					</div>
					<div className="col-md-3">
						Enter Sub-Location :
					</div>
					<div className="col-md-3">
						<p className="main-color">New York</p>
					</div>
					<div className="col-md-3">
						Name of Project :
					</div>
					<div className="col-md-3">
						 <p className="main-color">Mountain View</p>
					</div>
					<div className="col-md-3">
						Address :
					</div>
					<div className="col-md-3">
						 <p className="main-color">Mountain View</p>
					</div>
				</div>
				<div className="row">
					<h3 className="main-color">PROPERTY FEATURES</h3>
					<div className="col-md-3">
						Building Name :
					</div>
					<div className="col-md-3">
						<p className="main-color">New York</p>
					</div>
					<div className="col-md-3">
						Furnished Status :
					</div>
					<div className="col-md-3">
						 <p className="main-color">Semi-Furnished</p>
					</div>
					<div className="col-md-3">
						Select Floors :
					</div>
					<div className="col-md-3">
						<p className="main-color">6</p>
					</div>
					<div className="col-md-3">
						Shared Office Space  :
					</div>
					<div className="col-md-3">
						 <p className="main-color">Yes</p>
					</div>
				</div>
				<div className="row">
					<h3 className="main-color">AREA</h3>
					<div className="col-md-3">
						Covered Area :
					</div>
					<div className="col-md-3">
						<p className="main-color">2000</p>
					</div>
					<div className="col-md-3">
						Area :
					</div>
					<div className="col-md-3">
						 <p className="main-color">sq-ft</p>
					</div>
					<div className="col-md-3">
						Plot Area :
					</div>
					<div className="col-md-3">
						<p className="main-color">1650</p>
					</div>
					<div className="col-md-3">
						Area :
					</div>
					<div className="col-md-3">
						 <p className="main-color">sq-ft</p>
					</div>
					<div className="col-md-3">
						Carpet Area :
					</div>
					<div className="col-md-3">
						 <p className="main-color">1300</p>
					</div>
					<div className="col-md-3">
						Area :
					</div>
					<div className="col-md-3">
						 <p className="main-color">sq-ft</p>
					</div>
				</div>
				<div className="row">
					<h3 className="main-color">TRANSACTION TYPE, PROPERTY AVAILABILITY</h3>
					<div className="col-md-3">
						Transaction Type :
					</div>
					<div className="col-md-3">
						<p className="main-color">New Property</p>
					</div>
					<div className="col-md-3">
						Possession Status :
					</div>
					<div className="col-md-3">
						 <p className="main-color">Under-Construction</p>
					</div>
					<div className="col-md-3">
						Available From :
					</div>
					<div className="col-md-3">
						
						<div className=" jssor_1_demo11" >
							 <p className="main-color">June</p>
						</div>
						<div className="">
							 <p className="main-color">2014</p>
						</div>
					</div>
					<div className="col-md-3">
						Currently Leased out  :
					</div>
					<div className="col-md-3">
						 <p className="main-color">Yes</p>
					</div>
					<div className="col-md-3">
						Monthly Rent $ :
					</div>
					<div className="col-md-3">
						 <p className="main-color">$5000</p>
					</div>
				</div>
				<div className="row">
					<h3 className="main-color">PRICE DETAILS</h3>
					<div className="col-md-3">
						Expected Price  :
					</div>
					<div className="col-md-3">
						<p className="main-color">$10000</p>
					</div>
					<div className="col-md-3">
						Price Per Square Yard $ :
					</div>
					<div className="col-md-3">
						 <p className="main-color">$1000</p>
					</div>
					<div className="col-md-3">
						Other Charges $ :
					</div>
					<div className="col-md-3">
						<p className="main-color">$800</p>
					</div>
					
				</div>
				
				<div className="row">
					<h3 className="main-color">Contact Details :</h3>
						<table className="table col-xs-12 col-sm-12">
							<tbody>
								<tr>
									<td><strong>John</strong></td>
									<td>
										<strong>Address :</strong> Weston St.<br/> United States<br/><strong>Contact :</strong> +1234455876
									</td>
								</tr>
								
							</tbody>
						</table>
				</div>
			</div>
			
				<a href="#" className="main-btn">Edit Contact Details</a>
			
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

export default ViewSelectedProjects;
