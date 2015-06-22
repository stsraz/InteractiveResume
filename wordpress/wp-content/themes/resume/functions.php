<?php

function tracker_scripts() {
  wp_enqueue_script('jquery');

  wp_enqueue_script(
		'boostrapJS',
		get_stylesheet_directory_uri() . '/libraries/bootstrap/js/bootstrap.js'
	);

  wp_enqueue_script(
    'countdownPlugin',
    get_stylesheet_directory_uri() . '/libraries/countdown/jquery.plugin.js'
  );

  wp_enqueue_script(
		'countdownJS',
		get_stylesheet_directory_uri() . '/libraries/countdown/jquery.countdown.js'
	);

  wp_register_script(
		'angularjs',
		get_stylesheet_directory_uri() . '/libraries/angularjs/angular.js'
	);

  wp_register_script(
		'angularjs-route',
		get_stylesheet_directory_uri() . '/libraries/angularjs/angular-route.js'
	);

  wp_register_script(
    'angularjs-cookies',
    get_stylesheet_directory_uri() . '/libraries/angularjs/angular-cookies.js'
  );

	wp_enqueue_script(
		'app',
		get_stylesheet_directory_uri() . '/app/app.js',
		array( 'angularjs', 'angularjs-route', 'angularjs-cookies' )
	);

  wp_enqueue_script(
    'routes',
    get_stylesheet_directory_uri() . '/app/routes.js',
    array( 'angularjs', 'angularjs-route' )
  );

  wp_enqueue_script(
    'tracker-steps-data',
    get_stylesheet_directory_uri() . '/app/tracker-steps-data.js'
  );
  // Tracker App Controllers
  wp_enqueue_script(
    'tracker-controller',
    get_stylesheet_directory_uri() . '/app/js/controllers/tracker/tracker.js',
    array( 'angularjs', 'angularjs-cookies' )
  );

  wp_enqueue_script(
    'tracker-steps-controller',
    get_stylesheet_directory_uri() . '/app/js/controllers/tracker/tracker-steps.js',
    array( 'angularjs' )
  );

  wp_enqueue_script(
    'tracker-timer-controller',
    get_stylesheet_directory_uri() . '/app/js/controllers/tracker/timer.js',
    array( 'angularjs' )
  );
  wp_enqueue_script(
    'tracker-progress-bar-controller',
    get_stylesheet_directory_uri() . '/app/js/controllers/tracker/progress-bar.js',
    array( 'angularjs' )
  );

  wp_enqueue_script(
    'tracker-modal-controller',
    get_stylesheet_directory_uri() . '/app/js/controllers/tracker/modal.js',
    array( 'angularjs' )
  );

  // Tracker App Directives
  wp_enqueue_script(
    'tracker-directive',
    get_stylesheet_directory_uri() . '/app/js/directives/tracker/tracker.js',
    array( 'angularjs', 'angularjs-cookies' )
  );

  wp_enqueue_script(
    'tracker-steps-directive',
    get_stylesheet_directory_uri() . '/app/js/directives/tracker/tracker-steps.js',
    array( 'angularjs' )
  );

  wp_enqueue_script(
    'tracker-timer-directive',
    get_stylesheet_directory_uri() . '/app/js/directives/tracker/timer.js',
    array( 'angularjs' )
  );

  wp_enqueue_script(
    'tracker-progress-bar-directive',
    get_stylesheet_directory_uri() . '/app/js/directives/tracker/progress-bar.js',
    array( 'angularjs' )
  );

  wp_enqueue_script(
    'tracker-modal-directive',
    get_stylesheet_directory_uri() . '/app/js/directives/tracker/modal.js',
    array( 'angularjs' )
  );

  wp_enqueue_script(
    'when-ready-directive',
    get_stylesheet_directory_uri() . '/app/js/directives/tracker/whenReady.js',
    array( 'angularjs' )
  );

  // Tracker App Services
  wp_enqueue_script(
    'tracker-database-service',
    get_stylesheet_directory_uri() . '/app/js/services/tracker/tracker-database.js',
    array( 'angularjs' )
  );

}

function tracker_styles() {
  wp_register_style(
    'bootstrap',
    get_stylesheet_directory_uri() . '/libraries/bootstrap/css/bootstrap.css'
  );
  wp_enqueue_style('bootstrap');

  wp_enqueue_style(
    'countdown',
    get_stylesheet_directory_uri() . '/libraries/countdown/jquery.countdown.css'
  );

  wp_enqueue_style(
    'my-style',
    get_stylesheet_directory_uri() . '/app/css/style.css'
  );

  wp_enqueue_style(
    'tracker-style',
    get_stylesheet_directory_uri() . '/app/css/tracker.css'
  );

}

function tracker_localized() {
  wp_localize_script(
    'tracker-database-service',
    'WordpressData',
    array(
      'ajaxurl' => admin_url('admin-ajax.php'),
      'currentUser' => wp_get_current_user()
    )
  );
  wp_localize_script(
    'routes',
    'localizedRoute',
    array(
      'partials' => trailingslashit( get_template_directory_uri() ) . 'app/partials/'
    )
  );

  wp_localize_script(
    'tracker-steps-directive',
    'localizedRoute',
    array(
      'partials' => trailingslashit( get_template_directory_uri() ) . 'app/partials/'
    )
  );

  wp_localize_script(
    'tracker-timer-directive',
    'localizedRoute',
    array(
      'partials' => trailingslashit( get_template_directory_uri() ) . 'app/partials/'
    )
  );

  wp_localize_script(
    'tracker-progress-bar-directive',
    'localizedRoute',
    array(
      'partials' => trailingslashit( get_template_directory_uri() ) . 'app/partials/'
    )
  );

  wp_localize_script(
    'tracker-modal-directive',
    'localizedRoute',
    array(
      'partials' => trailingslashit( get_template_directory_uri() ) . 'app/partials/'
    )
  );

  wp_localize_script(
    'tracker-modal-body-directive',
    'localizedRoute',
    array(
      'partials' => trailingslashit( get_template_directory_uri() ) . 'app/partials/'
    )
  );
}

add_action( 'wp_enqueue_scripts', 'tracker_styles' );
add_action( 'wp_enqueue_scripts', 'tracker_scripts' );
add_action( 'wp_enqueue_scripts', 'tracker_localized' )
?>
