terminal
npm create vite@latest
naming folder - ochi
select - react , javascript
cd ochi
npm i
npm run dev (to run server)


setup tailwindcss

go to tailwindcss.com
get started - framework guides - vite

terimnal
2nd 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

aage ka sab website pe hai

type - rfce in jsx file


App.jsx
navbar
landing page
marquee (jo chalte rahega screen pe right to left)
about
playful
cards
cards
ready to start
footer



FONT :

google font use karne ke liye 
pahle font ko import karo jisme tailwind css import hai jaise ki  "index.css"

@import url('https://fonts.googleapis.com/css2?family=Whisper&display=swap');

fir uske baad "tailwind.config.js" me extend me font family dalo kisi bhi naam se

fontFamily: {
        whisper: ["Whisper", "cursive"]
      }
      
fir use karo jaha karna hai



FRAMER :

animation ke liye "framer motion" website pe jao
introduction - installation - 
npm install framer-motion
fir import karo
import { motion } from "framer-motion"

fir jaha jaha use karna hai uske aage (motion.)
eg:- <motion.h1> </motion.h1> , <motion.div> </motion.div>

pahle - intial , animate , transition 


ANIMATION :

iske liye website pe jaiye - https://scroll.locomotive.ca/docs/#/
get started -> quick start

install:
npm install locomotive-scroll@beta

javascript ko copy kijiye aur "App.jsx" me import kijiye
import LocomotiveScroll from 'locomotive-scroll';

return ke upar paste kijiye
const locomotiveScroll = new LocomotiveScroll();


GSAP:
npm i gsap
