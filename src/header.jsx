import './header.css';
function Head() {
   return(
    <>
    {/* <img  class="  hidden md:block md:w-auto md:h-[820px] " src="https://pwskills.com/images/pwskills_thumbnail.png" alt="IMAGE GOES HERE" />     //PCIMAGE_1 */}
    <img class=" mt-24 hidden md:block md:w-full md:h-[720px] " src="https://cdn.pwskills.com/assets/uploads/thumbnails/655ec3882a5a8347223ce209.png" alt="" /> {/*PCIMAGE_2*/}
     <div class=" block md:hidden  mt-3 w-[92%] ml-5  p-5 rounded-lg">
    <img class="block mt-10  md:hidden mw-auto  h-full " src="https://pwskills.com/images/homePage/hero-bg.png" alt="" />
    {/* <div class=" text-4xl font-bold bg-slate-300 text-black p-5 rounded-3xl ">
      "Upskill Yourself <br /><span class=" mt-5 text-[35px] flex justify-end"> With Pw Skills.." </span>
    </div> */}
     </div>
    </>
   ) 
}
export default Head