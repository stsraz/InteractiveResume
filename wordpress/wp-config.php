<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', 'wordpress');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%tgEv<;)AHKZYI~>+d+7)9u[>dHk+lGv[@cMqoe/)|`R@1Bt~)zuC3dTI*RpsB-Y');
define('SECURE_AUTH_KEY',  'jgxNDy+(Lf#b#;mG|sBJ]cZ{gHWG,~aSF.LtK_fxhn%wGlvt=/+-#=Q++ bK=6~3');
define('LOGGED_IN_KEY',    'MT]uf|U#TA1p-`<y_zI}29#)i$:o)^9AvO~cZ9cU~2Fw5kJd YOnh;6OS?>i iM(');
define('NONCE_KEY',        'd/UlRWrq])3yiZer!dO+;09r6M-SC#JrE!Cbp_w,*BVA%K>=g{2 RrAR(dqBGZtb');
define('AUTH_SALT',        '*oC ODkRr>l-1CE n6wrtF{.j1-22/C;0TOc|e?5@:dTz6_EV,P;Rr}XhOH.#xaq');
define('SECURE_AUTH_SALT', '|(;I1z;1^_a^+XlGn$|*M!UW,B-hm6aqLo#z@>H)l{?u<9W=gttKn(58(?UNl_^:');
define('LOGGED_IN_SALT',   'x8Z%nk&[2aMht<4&pr.w7:Xk?j}|S`n%-8``@<a(/u,p6VfH[gK|ogs@2710%L=!');
define('NONCE_SALT',       'ss9.DcfP+$! Rh-,%>Wr]J P~]GgyZ=C9;L;@E.Z}H5we6FuzV[F/ruf-~JDM5Q{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
