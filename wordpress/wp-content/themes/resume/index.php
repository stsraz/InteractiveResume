<!DOCTYPE html>
<html>
<head>
  <base href="<?php $url_info = parse_url( site_url() ); echo trailingslashit( $url_info['path'] ); ?>">
  <meta charset="utf-8">
  <?php wp_head(); ?>
</head>
<body ng-app="resumeApp">
  <header>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class='container'>
        <div class='navbar-header'>
          <a class='navbar-brand' href="home">Joseph Rasmussen</a>
        </div>
        <ul class="nav navbar-nav nav-pills navbar-right">
          <li><a href="home">Home</a></li>
          <li><a href="experience">Experience</a></li>
          <li><a href="skills">Skills</a></li>
          <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown">Projects <span class="caret"></span></a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a href="tracker">Tracker</a></li>
            </ul>
          </li>
          <li><a href="contact">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <div ng-view></div>
</body>
</html>
