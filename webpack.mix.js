let mix = require('laravel-mix');

mix.setResourceRoot('/wp-content/themes/sage_woo/dist_woo/');

mix//.js('src/app.js', 'dist')
//.sass('assets/css/woocommerce-layout.scss', 'woocommerce.css')
//.sass('assets/css/woocommerce-smallscreen.scss', 'woocommerce.css')
.sass('assets/css/woocommerce.scss', 'woocommerce.css')
.setPublicPath('dist_woo');