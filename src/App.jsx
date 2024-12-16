import { useEffect } from 'react';
import './App.css'
import logo from './images/logoLoad.svg'
import { animate, motion, useAnimation } from 'framer-motion';

function App() {

  const controls = useAnimation();
  const arrange = useAnimation();
  const image = useAnimation();

  useEffect(() => {
    // Major div zoom-in effect
    controls.start({
      scale: [0.1, 1.5, 1],  // Start from a small size, then grow to normal size
      rotateY: [260, 0],     // Apply a 3D rotation on the Y-axis
      rotateX: [260,0],
      // opacity: [0, 1],      // Start hidden, then fade in
      transition: {
        duration: 2,        // Zoom-in and rotation happen over 3 seconds
        ease: "easeOut",  // Smooth easing for zoom-in and rotation
      },
      
    });

    // Make the image and divs visible after the zoom-in effect
    setTimeout(() => {
      image.start({
        opacity: 1,         // Make the image visible
        scale: [1, 1.2, 1],   // Ensure the image is at its original size
        transition: {
          duration: 2,      // Make the image fade in after the zoom effect
          ease: "easeIn", // Smooth fading
        },
        
      });

      arrange.start({
        opacity: 1,         // Make all the other divs (like "Web Development", "AI", etc.) visible
        transition: {
          duration: 2,      // Transition duration for visibility
          delay: 1,         // Delay to ensure this starts after image fades in
          ease: "easeInOut",
        },

      });
      
      
    }, 500); // Wait for 3 seconds before starting the image and div transitions

    setTimeout(()=>{
      controls.start({
        opacity: 0,          // Fade out (set opacity to 0)
        scale: [1, 0.2, 1],  // Start from a small size, then grow to normal size
      rotateY: [180, 0],     // Apply a 3D rotation on the Y-axis
      rotateX: [180,0],
        transition: {
          duration: 2,       // Transition duration for fading out
          ease: "easeIn", // Smooth fade-out
        },
      });
    },3500);
  }, [controls, arrange, image]);

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-center'>
      {/* Main Zoom-in and 3D effect container */}
      <motion.div
        animate={controls}
        className='w-[449px] h-[449px] bg-gradient-to-b from-[#86D3FE] to-[#53C1FD] rounded-full flex flex-col gap-8 justify-center items-center'
      >
        {/* Divs like Web Development, AI, etc. */}
        <motion.div 
        animate={arrange}
        style={{ top: -40, right: 200 }}
        className='relative w-[186px] h-16 z-10 flex justify-center items-center rounded-[60px] border border-[#01466B] opacity-0'>
          <div className='w-[171px] h-[50px] bg-[#FFFFFF] flex text-center justify-center items-center rounded-[60px] font-ibm-plex-sans text-[14px] font-semibold leading-[22px]'>
            Web Development
          </div>
        </motion.div>
        <motion.div animate={arrange} 
        style={{ bottom: 140, left: 250 }}
        className='relative w-[186px] h-16 z-10 flex justify-center items-center rounded-[60px] border border-[#01466B] opacity-0'>
          <div className='w-[171px] h-[50px] bg-[#FFFFFF] flex text-center justify-center items-center rounded-[60px] font-ibm-plex-sans text-[14px] font-semibold leading-[22px]'>
            Artificial Intelligence
          </div>
        </motion.div>

        {/* Major div for SEO, App Development, and other categories */}
        <motion.div animate={controls} className='fixed w-[349px] h-[349px] bg-gradient-to-b from-[#53C1FD] to-[#21AFFD] rounded-full flex flex-col gap-8 justify-center items-center'>
          <motion.div animate={image} className='fixed w-[252px] h-[252px] bg-gradient-to-b from-[#21AFFD] to-[#0288D1] rounded-full flex flex-col gap-8 justify-center items-center'>
            <motion.div animate={arrange}
            style={{ bottom: 100, left: 50 }}
            className='relative w-fit h-16 z-10 p-1 flex justify-center items-center rounded-full border border-[#01466B] opacity-0'>
              <div className=' w-full p-4 h-[50px] bg-[#FFFFFF] flex text-center justify-center items-center rounded-full font-ibm-plex-sans text-[14px] font-semibold leading-[22px]'>
                SEO
              </div>
            </motion.div>
            <div className='fixed w-[170px] h-[170px] bg-gradient-to-b from-[#0288D1] to-[#022335] rounded-full flex flex-col gap-8 justify-center items-center'>
              <motion.img  src={logo} alt="Logo" className='fixed' />
            </div>
          </motion.div>

          {/* Other Divs like App Development */}
          <motion.div animate={arrange} 
          
          style={{ top: 150, right: 250 }}
          className='relative w-[186px] h-16 z-10 flex justify-center items-center rounded-[60px] border border-[#01466B] opacity-0'>
            <div className='w-[171px] h-[50px] bg-[#FFFFFF] flex text-center justify-center items-center rounded-[60px] font-ibm-plex-sans text-[14px] font-semibold leading-[22px]'>
              App Development
            </div>
          </motion.div>

          <motion.div animate={arrange} 
          
          style={{ top: 0, left: 230 }}
          className='relative w-[186px] h-16 z-10 flex justify-center items-center rounded-[60px] border border-[#01466B] opacity-0'>
            <div className='w-[171px] h-[50px] bg-[#FFFFFF] flex text-center justify-center items-center rounded-[60px] font-ibm-plex-sans text-[14px] font-semibold leading-[22px]'>
              UI/ UX Design
            </div>
          </motion.div>
        </motion.div>

        {/* Other Divs like Video Editing */}
        <motion.div animate={arrange} 
        
        style={{ top: 130, left: 50 }}
        className='relative w-[186px] h-16 z-10 flex justify-center items-center rounded-[60px] border border-[#01466B] opacity-0'>
          <div className='w-[171px] h-[50px] bg-[#FFFFFF] flex text-center justify-center items-center rounded-[60px] font-ibm-plex-sans text-[14px] font-semibold leading-[22px]'>
            Video Editing
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
