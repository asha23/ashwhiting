<?php

// Use this file to create custom post types.
// Portfolio post type - Change this or delete it

// function portfolio_post_type() {
//
//     $labels = array(
//         'name'                  => _x( 'Portfolio', 'Post Type General Name', 't_seed_theme' ),
//         'singular_name'         => _x( 'Portfolio', 'Post Type Singular Name', 't_seed_theme' ),
//         'name_admin_bar'        => __( 'Portfolio', 't_seed_theme' ),
//         'parent_item_colon'     => __( 'Parent Portfolio:', 't_seed_theme' ),
//         'all_items'             => __( 'All Portfolios', 't_seed_theme' ),
//         'add_new_item'          => __( 'Add New Portfolio', 't_seed_theme' ),
//         'add_new'               => __( 'Add New', 't_seed_theme' ),
//         'new_item'              => __( 'New Item', 't_seed_theme' ),
//         'edit_item'             => __( 'Edit Item', 't_seed_theme' ),
//         'update_item'           => __( 'Update Item', 't_seed_theme' ),
//         'view_item'             => __( 'View Item', 't_seed_theme' ),
//         'search_items'          => __( 'Search Item', 't_seed_theme' ),
//         'not_found'             => __( 'Not found', 't_seed_theme' ),
//         'not_found_in_trash'    => __( 'Not found in Trash', 't_seed_theme' ),
//         'items_list'            => __( 'Items list', 't_seed_theme' ),
//         'items_list_navigation' => __( 'Items list navigation', 't_seed_theme' ),
//         'filter_items_list'     => __( 'Filter items list', 't_seed_theme' ),
//     );
//     $args = array(
//         'label'                 => __( 'Portfolio', 't_seed_theme' ),
//         'description'           => __( 'Portfolio Custom Post', 't_seed_theme' ),
//         'labels'                => $labels,
//         'supports'              => array( 'title', 'editor', 'revisions', 'thumbnail', 'excerpt', 'page-attributes'),
//         'taxonomies'            => array( ),
//         'hierarchical'          => false,
//         'public'                => true,
//         'show_ui'               => true,
//         'show_in_menu'          => true,
//         'menu_position'         => 20,
//         'menu_icon'             => 'dashicons-images-alt',
//         'show_in_admin_bar'     => true,
//         'show_in_nav_menus'     => true,
//         'can_export'            => true,
//         'has_archive'           => false,
//         'exclude_from_search'   => false,
//         'publicly_queryable'    => true,
//         'capability_type'       => 'page'
//     );
//     register_post_type( 'portfolio', $args );
// }
// add_action( 'init', 'portfolio_post_type', 0 );
//
// // Portfolio taxonomy
//
// function portfolio_taxonomy() {
// 	$labels = array(
// 		'name'              => _x( 'Portfolio Types', 'taxonomy general name', 't_seed_theme' ),
// 		'singular_name'     => _x( 'Portfolio Types', 'taxonomy singular name', 't_seed_theme' ),
// 		'search_items'      => __( 'Search Portfolio Types', 't_seed_theme' ),
// 		'all_items'         => __( 'All Portfolio Types', 't_seed_theme' ),
// 		'parent_item'       => __( 'Parent Portfolio Type', 't_seed_theme' ),
// 		'parent_item_colon' => __( 'Parent Portfolio Type:', 't_seed_theme' ),
// 		'edit_item'         => __( 'Edit Portfolio Type', 't_seed_theme' ),
// 		'update_item'       => __( 'Update Portfolio Type', 't_seed_theme' ),
// 		'add_new_item'      => __( 'Add New Portfolio Type', 't_seed_theme' ),
// 		'new_item_name'     => __( 'New Portfolio Type', 't_seed_theme' ),
// 		'menu_name'         => __( 'Portfolio Type', 't_seed_theme' ),
// 	);
//
// 	$args = array(
// 		'labels' => $labels,
// 		'hierarchical'  => true,
// 		'public'        => true,
// 		'has_archive'   => true,
// 	);
//
// 	register_taxonomy( 'portfolio_category', 'portfolio', $args );
// }
// add_action( 'init', 'portfolio_taxonomy', 0 );
