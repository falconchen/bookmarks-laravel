import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: 'bookmarks.local', // 这里设置监听的IP
        //port: 15173 // 这里设置监听的端口，如果不对，要修改一下
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
