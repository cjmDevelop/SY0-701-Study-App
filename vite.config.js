import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    server: {
        port: 3000,
        open: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                login: resolve(__dirname, 'login.html'),
                signup: resolve(__dirname, 'signup.html'),
                profile: resolve(__dirname, 'profile.html'),
                'delete-account': resolve(__dirname, 'delete-account.html'),
                'verify-email': resolve(__dirname, 'verify-email.html'),
                'forgot-password': resolve(__dirname, 'forgot-password.html'),
                'reset-password': resolve(__dirname, 'reset-password.html'),
                'quiz-menu': resolve(__dirname, 'quiz-menu.html'),
                quiz: resolve(__dirname, 'quiz.html'),
                'sub-menu': resolve(__dirname, 'sub-menu.html'),
                'sub-menu-2': resolve(__dirname, 'sub-menu-2.html'),
                'sub-menu-3': resolve(__dirname, 'sub-menu-3.html'),
                'sub-menu-4': resolve(__dirname, 'sub-menu-4.html'),
                'sub-menu-5': resolve(__dirname, 'sub-menu-5.html'),
            }
        }
    }
})