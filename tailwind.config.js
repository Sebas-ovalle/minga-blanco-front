/**  @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
        './src//*.{js,jsx,ts,tsx}'  //esto también es una forma de englobar subdirectorios
    ],
    theme: {
        extend: {
            screens:{
                'xsm': {'min': '320px', 'max': '767px'}
              },
        }
    },
    variants: {},
    plugins: []
}
