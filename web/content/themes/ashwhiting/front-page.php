<?php
$context = Timber::get_context();
$context['options'] = get_fields('options');
$context['posts'] = Timber::get_posts();
$templates = array( 'front-page.twig' );
Timber::render( $templates, $context );
