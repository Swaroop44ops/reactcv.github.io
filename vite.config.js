import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: "/reactcv.github.io/",   // 👈 keep it exactly like this
});
