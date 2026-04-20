tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'martex-fade-in-right': {
          from: { opacity: '0', transform: 'translate3d(20%, 0, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        'martex-fade-in-left': {
          from: { opacity: '0', transform: 'translate3d(-20%, 0, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        'martex-fade-in-up': {
          from: { opacity: '0', transform: 'translate3d(0, 30%, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'martex-fade-in-right': 'martex-fade-in-right 2s ease both',
        'martex-fade-in-left': 'martex-fade-in-left 2s ease both',
        'martex-fade-in-up': 'martex-fade-in-up 1.75s ease both',
      },
    },
  },
};
