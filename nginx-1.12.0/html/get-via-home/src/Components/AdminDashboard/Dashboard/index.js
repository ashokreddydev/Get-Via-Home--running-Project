import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


class Dashboard extends React.Component {
  render() {
      
      const data = [
      {name: 'Jan', Total_Projects: 4000, Total_Investors: 2400,Total_Contacts: 3000, amt: 2400},
      {name: 'Feb', Total_Projects: 3000, Total_Investors: 1398,Total_Contacts: 2400, amt: 2210},
      {name: 'Mar', Total_Projects: 2000, Total_Investors: 9800,Total_Contacts: 2400, amt: 2290},
      {name: 'Apr', Total_Projects: 2780, Total_Investors: 3908,Total_Contacts: 2400, amt: 2000},
      {name: 'May', Total_Projects: 1890, Total_Investors: 4800,Total_Contacts: 2400, amt: 2181},
      {name: 'Jun', Total_Projects: 2390, Total_Investors: 3800,Total_Contacts: 2400, amt: 2500},
      {name: 'Jul', Total_Projects: 2000, Total_Investors: 9800,Total_Contacts: 2400, amt: 2290},
      {name: 'Aug', Total_Projects: 2780, Total_Investors: 3908,Total_Contacts: 2400, amt: 2000},
      {name: 'Sep', Total_Projects: 1890, Total_Investors: 4800,Total_Contacts: 2400, amt: 2181},
      {name: 'Oct', Total_Projects: 2390, Total_Investors: 3800,Total_Contacts: 2400, amt: 2500},
      {name: 'Nov', Total_Projects: 2390, Total_Investors: 3800,Total_Contacts: 2400, amt: 2500},
      {name: 'Dec', Total_Projects: 2390, Total_Investors: 3800,Total_Contacts: 2400, amt: 2500}
    ]
      
           const SimpleBarChart = React.createClass({
	render () {
  	return (
    	<BarChart width={1000} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="Total_Projects" fill="#338b7a" />
       <Bar dataKey="Total_Investors" fill="#4997b7" />
        <Bar dataKey="Total_Contacts" fill="#c3a515" />
      </BarChart>
    );
  }
})
      
    return (
      <div >
       <section id="container" >

<header className="header fixed-top clearfix">
{/* logo start */}
<div className="brand">
    <a href="DashBoard" className="logo">
        <img src="images/main-logo.png" alt="" className="img-responsive" />
    </a>
    <div className="sidebar-toggle-box">
        <div className="fa fa-bars"></div>
    </div>
</div>
{/*  logo end */}

<div className="nav notify-row" id="top_menu">
    {/*  notification start */}
    <ul className="nav top-menu">
       {/* inbox dropdown start */}
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
        {/* notification dropdown start */}
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
    {/* search & user info start */}
    <ul className="nav pull-right top-menu">
        {/* <li>
            <input type="text" className="form-control search" placeholder=" Search">
        </li> */}
        {/* user login dropdown start */}
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
    {/* search & user info end */}
</div>
</header>
 {/* header end */}
<aside>
    <div id="sidebar" className="nav-collapse">
       {/* sidebar menu start */}
        <div className="leftside-navigation">
            <ul className="sidebar-menu" id="nav-accordion">
                <li>
                    <a className="active" href="DashBoard">
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
                        <li><a href="AdminAddProject">Add Project</a></li>
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
        {/* sidebar menu end */}
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
                            <a href="DashBoard" className="current">Dashboard</a>
                        </li>
                          {/* <li>
                            <a className="current" href="profile.html">Profile</a>
                        </li>
                       <li>
                            <a className="current" href="#">Elements</a>
                        </li> */}
                    </ul>
                </div>
		</div>
        {/* page start */}
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
            <span className="mini-stat-icon secondary-bg"><i className="fa fa-users"></i></span>
            <div className="mini-stat-info">
                <span>3682</span>
                Total Investors
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="mini-stat clearfix">
            <span className="mini-stat-icon third-bg"><i className="fa fa-address-card"></i></span>
            <div className="mini-stat-info">
                <span>3268</span>
                Total Contacts
            </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-md-12">
        <section className="panel">
            <div className="panel-body">
          <SimpleBarChart />
             {/*   <div id="cust-container"></div> */}
            </div>
        </section>
    </div>
</div>

<section className="panel projectlist">
                    <header className="panel-heading main-bg">
                        Projects List
                        {/* <span className="tools pull-right">
                            <a href="javascript:;" className="fa fa-chevron-down"></a>
                            <a href="javascript:;" className="fa fa-cog"></a>
                            <a href="javascript:;" className="fa fa-times"></a>
                         </span> */}
                    </header>
                    <div className="panel-body table-responsive">
                        <table className="table  table-hover general-table">
                            <thead>
                            <tr>
                                <th> Project Name</th>
                                <th className="hidden-phone">Description</th>
                                <th>Cost Estimate</th>
                                <th>Total Contacted</th>
                                <th>Investors</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><a href="RequestProject">Project 1</a></td>
                                <td className="hidden-phone">Lorem Ipsum dorolo imit</td>
                                <td>25276.00$ </td>
                                <td>22 Members</td>
                                <td>5 Members</td>
                            </tr>
                            <tr>
                                <td><a href="RequestProject">Project 2</a></td>
                                <td className="hidden-phone">Lorem Ipsum dorolo imit</td>
                                <td>73344.00$ </td>
                                <td>153 Members</td>
                                <td>18 Members</td>
                            </tr>
							<tr>
                                <td><a href="RequestProject">Project 3</a></td>
                                <td className="hidden-phone">Lorem Ipsum dorolo imit</td>
                                <td>15321.00$ </td>
                                <td>41 Members</td>
                                <td>26 Members</td>
                            </tr>
							<tr>
                                <td><a href="RequestProject">Project 4</a></td>
                                <td className="hidden-phone">Lorem Ipsum dorolo imit</td>
                                <td>45279.00$ </td>
                                <td>84 Members</td>
                                <td>38 Members</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>




        {/* page end */}
        </section>
    </section>
     {/* main content end */}


</section>

      </div>
    );
  }
}

export default Dashboard;