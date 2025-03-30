import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './',
    publicDir: 'static', // Explicitly set to 'static' to match your folder structure
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
})
