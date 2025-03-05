<?php
require_once __DIR__ . '/../../vendor/autoload.php';

use Grav\Common\Grav;
use Grav\Common\Page\Page;

$grav = Grav::instance();
$grav->setup();

// Set headers after Grav setup
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$pages = $grav['pages']->all()->ofType('page')->published()->order('date', 'desc');
$posts = [];

foreach ($pages as $page) {
    if ($page->template() === 'post') {
        $posts[] = [
            'title' => $page->title(),
            'slug' => $page->slug(),
            'date' => $page->date(),
            'category' => $page->taxonomy()['category'][0] ?? 'Uncategorized',
            'author' => $page->header()->author ?? 'Preterag Team',
            'excerpt' => $page->summary(200),
            'read_time' => ceil(str_word_count(strip_tags($page->content())) / 200)
        ];
    }
}

echo json_encode($posts); 