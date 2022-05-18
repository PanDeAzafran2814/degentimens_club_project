module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'in' : {'max':'1024px'},
        'ni' : {'min':'1024px'},
        'nii' : {'max':'640px'},
        'xlmin' : {'max':'1280px'},
        'mdmax' : {'max':'768px'},
        'lgmm' : {'min':'850px'}
      },
      colors:{
        'BlurBlack': 'rgba(0, 0, 0, 0.342)',
        Navbar:{
          0:"#FBF8F1",
          10:"#F9B208",
          150:"#242320"
        },
        Containers:{
          0:"#191A19",
          10:"#191919"
        },
        Primarycolors:{
          0:"#5dffff",
          10:"#ffb6c1",
          150:"#FFFF86",
          200:"#ccffff"
        },
        TeamCircle:{
          1:"#3a677e",
          2:"#006d5b",
          3:"#a9a9a9"
        },
        ContainersColors:{
          1:'#d1f8ff',
        }
      },
      spacing: {
        "128" : "32rem",
      }
    },
  },
  plugins: [],
}
