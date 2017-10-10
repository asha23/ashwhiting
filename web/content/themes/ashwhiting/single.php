<?php
// Custom post - Delete or change this

$context = Timber::get_context();
$context['posts'] = Timber::get_posts();
$templates = array( 'single.twig' );
Timber::render( $templates, $context );
