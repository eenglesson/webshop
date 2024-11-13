module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Add this if using Next.js App Router
  ],
  theme: {
    extend: {
      scale: {
        '102': '1.02', // Custom scale for 102%
      },
      fontSize: {
        body: ['16px', '1.4'],
        h1: ['48px', '1.4'],
        h2: ['36px', '1.4'],
        h3: ['30px', '1.4'],
        h4: ['24px', '1.4'],
        h5: ['20px', '1.4'],
        h6: ['18px', '1.4'],
        small: ['14px', '1.4'],
        tiny: ['12px', '1.4'],
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        lightGray: '#F9F9F9', // Very light gray for background sections
        gray: '#E5E5E5', // Light gray for cards, dividers
        darkGray: '#A8A8A8', // Darker gray for borders or subtle text

        // Text colors
        black: '#1A1A1A', // Black for main text
        mutedText: '#4A4A4A', // Muted black for secondary text

        // Button/Accent color
        blue: {
          DEFAULT: '#317DE7', // Vibrant blue for primary buttons
          hover: '#4A96EC',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
