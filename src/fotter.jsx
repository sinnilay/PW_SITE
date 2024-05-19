import { Link } from "react-router-dom"

function Fotter() {
  return(
    <>
    <fotter class="w-full h-auto flex flex-col md:flex-row justify-around  bg-gray-700 flex-wrap">
        <div>
            <div class="flex flex-col mt-12">
               <img class=" w-32 md:w-36 "src="https://lab.pwskills.com/images/PWSkills-white.png" alt="" />
               <span class="flex flex-row mt-8 gap-4 text-xl ml-2"> <img class=" w-9"  src="https://i.pinimg.com/originals/c3/0e/ee/c30eee73a5e3d31b072f555985175165.jpg " alt="" /> <p class=" font-bold my-auto">support@pwskills.com</p></span> 
               <span class="flex flex-row  mt-4  gap-2 text-xl ml-2"> <img class=" w-9"  src="https://w7.pngwing.com/pngs/421/683/png-transparent-computer-icons-mobile-phones-telephone-email-home-business-phones-phone-icon-miscellaneous-angle-service-thumbnail.png" alt="" /> <p class=" font-bold my-auto">+91-8318461569</p></span>
               <span class="flex flex-row  mt-7 ml-2 gap-7">
                  <img class=" w-10" src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-jz44rpiz.png" alt="" />
                  <img class="w-10" src="https://cdn-icons-png.flaticon.com/256/152/152810.png" alt="" />
                  <img class="w-10" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/telegram-1867901-1580057.png?f=webp" alt="" />
               </span>
               <span><img class="md:w-24 w-16 mt-6 ml-2 md-ml-0 md:mb-6" src="https://5.imimg.com/data5/SELLER/Default/2022/1/RK/YU/RK/145165104/iso-9001-2015-certification-500x500.png" alt="" /></span>
            </div>
        </div>
        <div>
            <div class="flex flex-col  mt-6 md:mt-12 w-auto ml-2 md:ml-0">
               <p class=" text-2xl  md:text-3xl font-bold text-white ">Company</p>
                <div class=" border-b-4 w-96 h-1 border-orange-300  items-center   md:w-96 md:h-2 md:mt-3 md:border-b-5 rounded-lg mt-4"> 

                </div>
               
               <div class="flex flex-row  mt-3 w-auto  gap-32 ml-2 md:ml-0">
                  <ul class=" font-bold text-slate-300 flex flex-col gap-6">
                    <li class="hover:cursor-pointer"> <Link to='/about'> About us </Link></li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                  </ul>
                <ul class=" font-bold text-slate-300 flex flex-col gap-6">
                     <li>Contact us</li>
                     <li>Job Assistance</li>
                     <li>Teems and Conditions</li>
                 </ul>
               </div>
            </div>
        </div>
        <div>
            <div class="flex flex-col  mt-6 md:mt-12 w-auto ml-2 md:ml-0 mb-5 md:mb-0">
               <p class=" text-2xl  md:text-3xl font-bold text-white ">Products</p>
                <div class=" border-b-4 w-96 h-1 border-orange-300  items-center   md:w-96 md:h-2 md:mt-3 md:border-b-5 rounded-lg mt-4"> 

                </div>
               
               <div class="flex flex-row  mt-3 w-auto  gap-32 ml-2 md:ml-0">
                  <ul class=" font-bold text-slate-300 flex flex-col gap-6">
                    <li class="hover:cursor-pointer"> <Link to='/about'> PW Skills Lab </Link></li>
                    <li>Experience Portal</li>
                    <li>Hall Of Hame</li>
                  </ul>
                <ul class=" font-bold text-slate-300 flex flex-col gap-6">
                     <li>Job Portal</li>
                     <li>Become an affilate</li>
                     <li>Blog</li>
                 </ul>
               </div>
            </div>
        </div>
    </fotter>
    
    </>
  )  
}

export default Fotter