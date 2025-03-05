<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/config/system.yaml',
    'modified' => 1741132229,
    'size' => 3851,
    'data' => [
        'absolute_urls' => false,
        'timezone' => '',
        'default_locale' => NULL,
        'custom_base_url' => '',
        'languages' => [
            'supported' => [
                
            ],
            'default_lang' => NULL,
            'include_default_lang' => true,
            'include_default_lang_file_extension' => true,
            'translations' => true,
            'translations_fallback' => true,
            'session_store_active' => false,
            'http_accept_language' => false,
            'override_locale' => false,
            'pages_fallback_only' => false
        ],
        'home' => [
            'alias' => '/home',
            'hide_in_urls' => false
        ],
        'pages' => [
            'theme' => 'quark',
            'order' => [
                'by' => 'date',
                'dir' => 'desc'
            ],
            'list' => [
                'count' => 20
            ],
            'dateformat' => [
                'default' => 'd-m-Y H:i',
                'short' => 'jS M Y',
                'long' => 'F jS \\a\\t g:ia'
            ],
            'publish_dates' => true,
            'process' => [
                'markdown' => true,
                'twig' => false
            ],
            'twig_first' => false,
            'never_cache_twig' => false,
            'events' => [
                'page' => true,
                'twig' => true
            ],
            'markdown' => [
                'extra' => true,
                'auto_line_breaks' => false,
                'auto_url_links' => false,
                'escape_markup' => false,
                'special_chars' => [
                    '>' => 'gt',
                    '<' => 'lt'
                ]
            ],
            'types' => [
                0 => 'html',
                1 => 'htm',
                2 => 'xml',
                3 => 'txt',
                4 => 'json',
                5 => 'rss',
                6 => 'atom'
            ],
            'append_url_extension' => '',
            'expires' => 604800,
            'cache_control' => 'public',
            'last_modified' => false,
            'etag' => true,
            'vary_accept_encoding' => false,
            'redirect_default_route' => false,
            'redirect_default_code' => '302',
            'redirect_trailing_slash' => true,
            'ignore_files' => [
                0 => '.DS_Store'
            ],
            'ignore_folders' => [
                0 => '.git',
                1 => '.idea'
            ],
            'ignore_hidden' => true,
            'hide_empty_folders' => false,
            'url_taxonomy_filters' => true,
            'frontmatter' => [
                'process_twig' => false,
                'ignore_fields' => [
                    0 => 'form',
                    1 => 'forms'
                ]
            ]
        ],
        'cache' => [
            'enabled' => true,
            'check' => [
                'method' => 'file'
            ],
            'driver' => 'auto',
            'prefix' => 'g',
            'purge_at' => '0 4 * * *',
            'clear_at' => '0 3 * * *',
            'clear_job_type' => 'standard',
            'clear_images_by_default' => false,
            'cli_compatibility' => false,
            'lifetime' => 604800,
            'gzip' => false,
            'allow_webserver_gzip' => false,
            'redis' => [
                'socket' => false,
                'password' => NULL,
                'database' => NULL
            ]
        ],
        'twig' => [
            'cache' => true,
            'debug' => false,
            'auto_reload' => true,
            'autoescape' => true,
            'undefined_functions' => true,
            'undefined_filters' => true,
            'safe_functions' => [
                
            ],
            'safe_filters' => [
                
            ],
            'umask_fix' => false
        ],
        'assets' => [
            'css_pipeline' => false,
            'css_pipeline_include_externals' => true,
            'css_pipeline_before_excludes' => true,
            'css_minify' => true,
            'css_minify_windows' => false,
            'css_rewrite' => true,
            'js_pipeline' => false,
            'js_pipeline_include_externals' => true,
            'js_pipeline_before_excludes' => true,
            'js_module_pipeline' => false,
            'js_module_pipeline_include_externals' => true,
            'js_module_pipeline_before_excludes' => true,
            'js_minify' => true,
            'enable_asset_timestamp' => false,
            'enable_asset_sri' => false,
            'collections' => [
                'jquery' => 'system://assets/jquery/jquery-3.x.min.js'
            ]
        ],
        'errors' => [
            'display' => 1,
            'log' => true
        ],
        'log' => [
            'handler' => 'file',
            'syslog' => [
                'facility' => 'local6'
            ],
            'file' => [
                'filename' => 'grav.log'
            ]
        ],
        'debugger' => [
            'enabled' => false,
            'provider' => 'clockwork',
            'censored' => false,
            'shutdown' => [
                'close_connection' => true
            ],
            'twig' => true
        ],
        'images' => [
            'default_image_quality' => 85,
            'cache_all' => false,
            'cache_perms' => '0755',
            'debug' => false,
            'auto_fix_orientation' => true,
            'seofriendly' => false,
            'cls' => [
                'auto_sizes' => false,
                'aspect_ratio' => false,
                'retina_scale' => 1
            ]
        ],
        'media' => [
            'enable_media_timestamp' => false,
            'unsupported_inline_types' => [
                
            ],
            'allowed_fallback_types' => [
                
            ],
            'auto_metadata_exif' => false,
            'upload_limit' => 2097152
        ],
        'session' => [
            'enabled' => true,
            'initialize' => true,
            'timeout' => 1800,
            'name' => 'grav-site',
            'uniqueness' => 'path',
            'secure' => false,
            'secure_https' => true,
            'httponly' => true,
            'samesite' => 'Lax',
            'split' => true,
            'domain' => NULL,
            'path' => NULL
        ],
        'gpm' => [
            'releases' => 'stable',
            'official_gpm_only' => true,
            'verify_peer' => true
        ],
        'http' => [
            'method' => 'auto',
            'enable_proxy' => true,
            'proxy_url' => NULL,
            'proxy_cert_path' => NULL,
            'concurrent_connections' => 5,
            'verify_peer' => true,
            'verify_host' => true
        ],
        'accounts' => [
            'type' => 'regular',
            'storage' => 'file',
            'avatar' => 'gravatar'
        ],
        'flex' => [
            'cache' => [
                'index' => [
                    'enabled' => true,
                    'lifetime' => 60
                ],
                'object' => [
                    'enabled' => true,
                    'lifetime' => 600
                ],
                'render' => [
                    'enabled' => true,
                    'lifetime' => 600
                ]
            ]
        ],
        'strict_mode' => [
            'yaml_compat' => false,
            'twig_compat' => false,
            'blueprint_compat' => false
        ]
    ]
];
