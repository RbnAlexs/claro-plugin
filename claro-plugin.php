<?php
/**
 * Plugin Name:       Claro Plugin
 * Description:       A super simple Gutenberg plugin
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ruben Sanchez
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       claro-plugin
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 /*
function claro_plugin_claro_plugin_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'claro_plugin_claro_plugin_block_init' );
*/

function claro_plugin_render_content( $attributes ) {
	return '<h2>' . esc_html__( '¡Hola mundo! :D', 'claro-plugin' ) . '</h2>'; 
}

function claro_plugin_claro_plugin_block_init() {
    register_block_type( __DIR__ . '/build', array(
        'render_callback' => 'claro_plugin_render_content',
        'post_types' => array('post'),
    ));
}
add_action( 'init', 'claro_plugin_claro_plugin_block_init' );

function blacklist_blocks( $allowed_blocks ) {
    $post_type = get_post_type();

    // if the post type is 'post', return the allowed blocks without any modification
    if ($post_type === 'post') {
        return $allowed_blocks;
    }

    // get all the registered blocks
    $blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

    // then disable some of them
    unset( $blocks[ 'create-block/claro-plugin' ] );

    // return the new list of allowed blocks
    return array_keys( $blocks );
}
add_filter( 'allowed_block_types_all', 'blacklist_blocks' );
