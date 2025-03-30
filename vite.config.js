import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './',
    publicDir: 'public', // Changed from 'static' to 'public' to match your new folder structure
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
})
