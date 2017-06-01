import React from 'react';
   
class ManageProjectsView extends React.Component {
  render() {
    return (
        
        <section id="container" >
{/*header start*/}
<header className="header fixed-top clearfix">
{/*logo start*/}
<div className="brand">
    <a href="DashBoard" className="logo">
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
        {/* inbox dropdown start*/}
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
        {/* inbox dropdown end */}
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
                            <a href="AdminManageProjectContactDetails"> User3 Invested on Project 3.</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="alert alert-danger clearfix">
                        <span className="alert-icon"><i className="fa fa-building"></i></span>
                        <div className="noti-info">
                            <a href="AdminManageProjectContactDetails"> User1 Selected Project 2.</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="alert alert-success clearfix">
                        <span className="alert-icon"><i className="fa fa-building"></i></span>
                        <div className="noti-info">
                            <a href="AdminManageProjectContactDetails"> 2 Users Contacted on Project 8.</a>
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
                <span className="username">Admin</span>
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
                    <a href="DashBoard">
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
                    <a href="AdminNotifications">
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
                            <a href="DashBoard" className="">Dashboard</a>
                        </li>
                         <li>
                            <a  href="AdminManageProject">Manage Projects</a>
                        </li>
                        <li>
                            <a className="current" href="AdminManageProjectsView ">Edit Project Details</a>
                        </li>
                        {/*<li>
                            <a className="current" href="#">Elements</a>
                        </li> */}
                    </ul>
                </div>
		</div>
        {/* page start*/}

        <div className="row">
            
            <div className="col-md-12">
                <section className="panel">
                    <header className="panel-heading main-bg">
                        Add Project
                        {/* <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span> */}
                    </header>
                    <div className="panel-body">
                        <div className="tab-content tasi-tab">
                          
                            <div id="EditProfile" className="tab-pane active">
                                <div className="position-center">
                                    
                                    <form role="form" className="form-horizontal" id="reg-login">
									<div className="prf-contacts sttng prf-personal">
                                        <h2>Location</h2>
                                    </div>
									<div className="row">
                                        <div className="col-md-6">
											<div className="select-style location-style form-control">
											  <select>
												<option value="" selected disabled>New York</option>
												<option value="">New York</option>
												<option value="">Los Angeles</option>
												<option value="">Chicago</option>
												<option value="">Houston</option>
												<option value="">Dallas</option>
											</select>
											</div>
											
										</div>
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Locality" type="text" value="New York" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Enter Sub-Location" type="text" value="New York 1" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Name Of Project" type="email" value="House construction" required />
											</div>
										</div>
                                        <div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Address" type="text"  value="PO Box 4668, New York, NY 10163-4668, US" required />
											</div>
										</div>
									</div>
									<div className="row">
										<div className="prf-contacts sttng">
											<h2> Property Features</h2>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Building Name" type="text" value="Ashok reddy" required />
											</div>
										</div>
										<div className="col-md-6">
											<div className="select-style form-control ">
											  <select>
												<option value="" selected disabled>Semi-Furnished</option>
												<option value="">Furnished</option>
												<option value="" selected>Semi-Furnished</option>
												<option value="">Un-Furnished</option>
											  </select>
											</div>
											
										</div>
										<div className="col-md-6">
											<div className="select-style form-control ">
											  <select>
												<option value="" selected disabled>Select Floors</option>
												<option value="">1</option>
												<option value="">2</option>
												<option value="">3</option>
												<option value="">4</option>
												<option value="" selected>5</option>
												<option value="">6</option>
												<option value="">7</option>
												<option value="">8</option>
												<option value="">9</option>
												<option value="">10</option>
												
											</select>
											</div>
											
										</div>
										<div className="col-md-6 share-space">
											<span>Shared Office Space : </span>
											<div className="btn-group btn-group-horizontal" data-toggle="buttons">
												<label className="btn active">
												  <input type="radio" name='gender1'/><i className="fa fa-circle-o radiobutton-size"></i><i className="fa fa-dot-circle-o radiobutton-size"></i> <span>Yes</span>
												</label>
												<label className="btn">
												  <input type="radio" name='gender1'  checked/><i className="fa fa-circle-o radiobutton-size"></i><i className="fa fa-dot-circle-o radiobutton-size"></i><span>&nbsp;No</span>
												</label>
											  </div>
										</div>
										
										
									</div>
									<div className="row">
										<div className="prf-contacts sttng">
											<h2>Area</h2>
										</div>
										<div className="col-md-8">
											<div className="reg-login-info">
												<input placeholder="Covered Area" type="text" value="5" required/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="select-style form-control ">
											  <select>
												<option value="" selected disabled>Area</option>
												<option value="" selected>Sq-ft</option>
												<option value="">Sq-yard</option>
												<option value="">Sq-m</option>
												<option value="">Acre</option>
											  </select>
											</div>
										</div>
										<div className="col-md-8">
											<div className="reg-login-info">
												<input placeholder="Plot Area" type="text" value="6.5" required />
											</div>
										</div>
										<div className="col-md-4">
											<div className="select-style form-control ">
											  <select>
												<option value="" selected disabled>Area</option>
												<option value="" selected>Sq-ft</option>
												<option value="">Sq-yard</option>
												<option value="">Sq-m</option>
												<option value="">Acre</option>
											  </select>
											</div>
										</div>
										<div className="col-md-8">
											<div className="reg-login-info">
												<input placeholder="Carpet Area" type="text" value="3.5" required/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="select-style form-control ">
											  <select>
												<option value="" selected disabled>Area</option>
												<option value="" selected>Sq-ft</option>
												<option value="">Sq-yard</option>
												<option value="">Sq-m</option>
												<option value="">Acre</option>
											  </select>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="prf-contacts sttng">
											<h2>Transaction Type, Property Availability</h2>
										</div>
										<div className="col-md-6 share-space">
											<span>Transaction Type : </span>
											<div className="btn-group btn-group-horizontal" data-toggle="buttons">
												<label className="btn active">
												  <input type="radio" name='gender1' checked /><i className="fa fa-circle-o radiobutton-size"></i><i className="fa fa-dot-circle-o radiobutton-size"></i> <span>New Property</span>
												</label>
												<label className="btn">
												  <input type="radio" name='gender1'/><i className="fa fa-circle-o radiobutton-size"></i><i className="fa fa-dot-circle-o radiobutton-size"></i><span>&nbsp;Re-sale</span>
												</label>
											  </div>
										</div>
										<div className="col-md-6">
											<div className="col-md-4 available-from">
											<span>Available From : </span>
											</div>
											
											<div className="col-md-2 select-style1 form-control">
												  <select>
													<option value="" selected disabled>Month</option>
													<option value="">January</option>
													<option value="">February</option>
													<option value="">March</option>
													<option value="">April</option>
													<option value="" selected>May</option>
													<option value="">June</option>
													<option value="">July</option>
													<option value="">August</option>
													<option value="">September</option>
													<option value="">October</option>
													<option value="">November</option>
													<option value="">December</option>
												  </select>
											</div>
											<div className=" col-md-2 select-style1 form-control">
												  <select>
													<option value="" selected disabled>Year</option>
													<option value="" selected>2017</option>
													<option value="">2016</option>
													<option value="">2015</option>
													<option value="">2014</option>
													<option value="">2013</option>
													<option value="">2012</option>
													<option value="">2011</option>
													<option value="">2010</option>
													<option value="">2009</option>
													<option value="">2008</option>
													<option value="">2007</option>
													<option value="">2006</option>
													<option value="">2005</option>
													<option value="">2004</option>
													<option value="">2003</option>
													<option value="">2002</option>
												  </select>
											</div>
										</div>
										<div className="col-md-6 share-space">
											<span>Possession Status : </span>
											<div className="btn-group btn-group-horizontal" data-toggle="buttons">
												<label className="btn active">
												  <input type="radio" name='gender2' checked /><i className="fa fa-circle-o radiobutton-size"></i><i className="fa fa-dot-circle-o radiobutton-size"></i> <span>Under Construction</span>
												</label>
												<label className="btn">
												  <input type="radio" name='gender2'/><i className="fa fa-circle-o radiobutton-size"></i><i className="fa fa-dot-circle-o radiobutton-size"></i><span>&nbsp;Ready to Move</span>
												</label>
											  </div>
										</div>
										<div className="col-md-6 share-space">
											<span>CurrentlyLeased out :</span>
											<div className="btn-group btn-group-horizontal" data-toggle="buttons">
												<label className="btn active Yes" id="Yesradio">
												  <input type="radio" name='gender1' checked /><i className="fa fa-circle-o radiobutton-size"></i><i className="fa fa-dot-circle-o radiobutton-size"></i> <span>Yes</span>
												</label>
												<label className="btn" id="Noradio">
												  <input type="radio" name='gender1'/><i className="fa fa-circle-o radiobutton-size"></i><i className="fa fa-dot-circle-o radiobutton-size"></i><span>&nbsp;No</span>
												</label>
											  </div>
											  <div className="reg-login-info montlyrent1" id="Rent">
												<textarea className="txtarea-padd" placeholder="Please specify whether your property has  be leased to a company or an individual"></textarea>
												<input placeholder="Monthly Rent $" type="text" className="Rent" required/>
											</div>
										</div>
										
										
									</div>
									<div className="row">
										<div className="prf-contacts sttng">
											<h2>Price Details</h2>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Expected Price : Enter Total Price $" type="text" value="$256370" required/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Price Per Square Yard $" type="text" value="$250" required/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="reg-login-info">
												<input placeholder="Other Charges $" type="text" value="$50" required/>
											</div>
										</div>
									</div>
									<div className="col-md-12">
										<input type="file" name="files"/>
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
        {/* page end*/}
        </section>
    </section>
    {/*main content end*/}

</section>
     
    );
  }
}

export default ManageProjectsView;