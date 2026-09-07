/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-raised': 'var(--ink-raised)',
        bone: 'var(--bone)',
        violet: 'var(--violet)',
        'violet-deep': 'var(--violet-deep)',
        teal: 'var(--teal)',
        mute: 'var(--mute)',
        hairline: 'var(--hairline)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
    },
  },
  plugins: [],
}
