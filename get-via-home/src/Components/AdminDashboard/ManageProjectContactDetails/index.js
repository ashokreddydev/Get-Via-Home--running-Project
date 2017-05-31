import React from 'react';
   {/*     jQuery(document).ready(function ($) {

            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Zoom:1,$Easing:{$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2},
              {$Duration:1000,$Zoom:11,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Zoom:1,$Rotate:1,$During:{$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,$Cols:2,$Zoom:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Left:$Jease$.$Swing,$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:-4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:-0.6,$Zoom:1,$Rotate:1,$During:{$Left:[0.2,0.8],$Zoom:[0.2,0.8],$Rotate:[0.2,0.8]},$Easing:{$Left:$Jease$.$Swing,$Zoom:$Jease$.$Swing,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$Swing},$Opacity:2,$Round:{$Rotate:0.5}},
              {$Duration:1000,x:4,$Zoom:11,$Rotate:1,$SlideOut:true,$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.8}},
              {$Duration:1200,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1000,x:0.5,y:0.3,$Cols:2,$Zoom:1,$Rotate:1,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Top:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InExpo},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:-4,y:2,$Rows:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Row:28},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.7}},
              {$Duration:1200,x:1,y:2,$Cols:2,$Zoom:11,$Rotate:1,$Assembly:2049,$ChessMode:{$Column:19},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad,$Rotate:$Jease$.$InCubic},$Opacity:2,$Round:{$Rotate:0.8}}
            ];

            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Rows: 2,
                $Cols: 6,
                $SpacingX: 14,
                $SpacingY: 12,
                $Orientation: 2,
                $Align: 156
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

          
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 960);
                    refSize = Math.max(refSize, 300);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
           
        });
    
                    */}

class ManageProjectContactDetails extends React.Component {
  render() {
    return (
     <section id="container" >
{/* header start */}
<header className="header fixed-top clearfix">
{/* logo start */}
<div className="brand">
    <a href="/" className="logo">
        <img src="images/main-logo.png" className="img-responsive" />
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
                <li><a href="profile.html"><i className=" fa fa-suitcase"></i>Profile</a></li>
              
                <li><a href="index.html"><i className="fa fa-key"></i> Log Out</a></li>
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
                    <a href="javascript:;" className="active">
                        <i className="fa fa-building"></i>
                        <span>Projects</span>
                    </a>
                    <ul className="sub">
                        <li><a href="AddProject">Add Project</a></li>
                        <li><a href="ManageProjects">Manage Project</a></li>
                        <li className="active"><a href="managecontact.html">Manage Project Contact Details</a></li>
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
                            <a href="admin-dashboard.html" className="">Dashboard</a>
                        </li>
                        <li>
                            <a className="current" href="managecontact.html">Manage Project Contact Details</a>
                        </li> 
                    </ul>
                </div>
		</div>
        {/*  page start */}

        		<div className="row">
			<div className="card project-desc">
			<div className="container-fliud">
				<div className="row">
						
					<div className="col-md-7">
			
			<div id="jssor_1" className="jssor_1_demo1" >
        {/*  Loading Screen  */}
        <div data-u="loading" className="jssor_1_demo2" >
            <div className="jssor_1_demo3" ></div>
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
        {/*  Thumbnail Navigator  */}
        <div data-u="thumbnavigator" className="jssort01-99-66 jssor_1_demo7"  data-autocenter="2">
            {/*  Thumbnail Item Skin Begin  */}
            <div data-u="slides" className="jssor_1_demo8a">
                <div data-u="prototype" className="p">
                    <div className="w">
                        <div data-u="thumbnailtemplate" className="t"></div>
                    </div>
                    <div className="c"></div>
                </div>
            </div>
            {/*  Thumbnail Item Skin End  */}
        </div>
        {/*  Arrow Navigator  */}
        <span data-u="arrowleft" className="jssora05l jssor_1_demo8"  data-autocenter="2"></span>
        <span data-u="arrowright" className="jssora05r jssor_1_demo9" data-autocenter="2"></span>
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
					<h3 className="main-color">Contact Details :</h3>
						<table className="table col-xs-12 col-sm-12">
							<tbody>
								<tr>
									<td><strong>John</strong></td>
									<td>
										<strong>Address :</strong> Weston St. <br/> United States <br/><strong>Contact :</strong> +1234455876
									</td>
								</tr>
								
							</tbody>
						</table>
				</div>
			</div>
			
				<a href="#" className="main-btn">Edit Contact Details</a>
			
		</div>
		</div>
        {/*  page end */}
        </section>
    </section>
    {/* main content end */}


</section>
    );
  }
}

export default ManageProjectContactDetails;