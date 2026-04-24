import React from 'react'
import laptops from "../assets/laptops.webp";
import Trading from "../assets/Trading.webp";
import Signal from "../assets/Signal.jpg";
import Website from "../assets/Website.jpg";
import Ipad from "../assets/Ipad.png"
import Smiling from "../assets/Smiling.jpg"
function Portifilo() {
  return (
    <div>
        <div className="bg-black text-white min-h-screen">
         <nav className="flex items-center justify-between px-10 py-6">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>
                <h1 className="text-xl font-bold">Moshify</h1>
            </div>
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-white cursor-pointer">Hosting</li>
          <li className="hover:text-white cursor-pointer">VPS</li>
          <li className="hover:text-white cursor-pointer">Domain</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
        </ul>
         </nav>
         

         
         <div className="flex flex-col-reverse md:flex-row items-center justify-between px-10 py-6">
              <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Cloud Hosting <br /> for Pros
          </h1>
           <p className="text-gray-400 mt-6 text-lg">
            Deploy your websites in less than 60 seconds.
          </p>
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold">
            GET STARTED
          </button>
          
         </div>
              <div className="mb-10 md:mb-0">
          <img src={laptops} alt="Laptop"  className="w-full max-w-md object-contain"/>
        </div>
          </div>
         </div>
         
        <div className="text-center py-16">
          <div className="text-blue-700  text-5xl font-bold">Starting at $10 per month</div>
          <p className='py-4 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, exercitationem?</p>
          
          <div className="flex justify-center items-center pb-5">
  <div className="flex items-center bg-gray-200 rounded-full p-2 w-[600px]">
    
    <input
      type="text"
      placeholder="Enter domain name here..."
      className="flex-1 bg-transparent px-5 py-3 outline-none text-gray-500"
    />

    <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full">
      🔍 SEARCH
    </button>

  </div>
</div>

          <span className="bg-cyan-400 text-white px-4 py-1 rounded-full">
          .com $9
        </span>
        <span className="text-indigo-900 ">.sg $10</span>
        <span className="text-indigo-900 ">.space $11</span>
        <span className="text-indigo-900">.info $14</span>
        <span className="text-indigo-900">.net $10</span>
        <span className="text-indigo-900">.xyz $10</span>
        </div>

        {/* <div className=" flex flex-row gap-20 mx-20 ">
          <div className="">
            <h1 className='bg-blue-400 text-3xl text-white border-r-2'>Entry <br />$14 /month 10% OFF <br />Easy start on the cloud <br /></h1>
            <p>Unlimited Websites <br />Unlimited Bandwidth <br />100 GB SSD Sotrage <br />3 GB RAM <br /></p>
            <button className='bg-cyan-400 text-white px-4 py-1 rounded-full'>BUY NOW</button>
          </div>
          
          <div className="">
            <h1 className='bg-blue-800 text-3xl text-white'>Entry <br />$14 /month 10% OFF <br />Easy start on the cloud <br /></h1>
            <p>Unlimited Websites <br />Unlimited Bandwidth <br />100 GB SSD Sotrage <br />3 GB RAM <br /></p>
            <button className='bg-cyan-400 text-white px-4 py-1 rounded-full'>BUY NOW</button>
          </div>
          <div className="">
            <h1 className='bg-blue-400 text-3xl text-white'>Entry <br />$14 /month 10% OFF <br />Easy start on the cloud <br /></h1>
            <p>Unlimited Websites <br />Unlimited Bandwidth <br />100 GB SSD Sotrage <br />3 GB RAM <br />
            </p>
            <button className='bg-cyan-400 text-white px-4 py-1 rounded-full'>BUY NOW</button>
          </div>
        </div> */}

          <div className="flex justify-center gap-8 py-10">

  {/* CARD 1 */}
  <div className="w-80 bg-gray-100 rounded-xl shadow">
    <div className="bg-cyan-500 text-white p-6 rounded-t-xl">
      <p>Entry</p>
      <h1 className="text-4xl font-bold">$14 <span className="text-lg">/month</span></h1>
      <p className="mt-2">Easy start on the cloud</p>
    </div>

    <div className="p-6 space-y-4">
      <p>✔ Unlimited Websites</p>
      <p>✔ Unlimited Bandwidth</p>
      <p>✔ 100 GB SSD Sotrage</p>
      <p>✔ 3 GB RAM</p>

      <button className="w-full border-2 border-purple-900 rounded-full py-3 mt-6">
        BUY NOW
      </button>
    </div>
  </div>

  {/* CARD 2 (POPULAR) */}
  <div className="w-80 bg-gray-100 rounded-xl shadow scale-105">
    <div className="bg-blue-500 text-white p-6 rounded-t-xl relative">
      <p>Entry</p>
      <h1 className="text-4xl font-bold">$14 <span className="text-lg">/month</span></h1>
      <p className="mt-2">Easy start on the cloud</p>

      {/* Popular tag */}
      {/* <span className="absolute top-0 right-0 bg-purple-900 text-white px-3 py-6 text-sm rotate-90 origin-top-right">
        Popular
      </span> */}
    </div>

    <div className="p-6 space-y-4">
      <p>✔ Unlimited Websites</p>
      <p>✔ Unlimited Bandwidth</p>
      <p>✔ 100 GB SSD Sotrage</p>
      <p>✔ 3 GB RAM</p>

      <button className="w-full border-2 border-purple-900 rounded-full py-3 mt-6">
        BUY NOW
      </button>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="w-80 bg-gray-100 rounded-xl shadow">
    <div className="bg-cyan-500 text-white p-6 rounded-t-xl">
      <p>Entry</p>
      <h1 className="text-4xl font-bold">$14 <span className="text-lg">/month</span></h1>
      <p className="mt-2">Easy start on the cloud</p>
    </div>

    <div className="p-6 space-y-4">
      <p>✔ Unlimited Websites</p>
      <p>✔ Unlimited Bandwidth</p>
      <p>✔ 100 GB SSD Sotrage</p>
      <p>✔ 3 GB RAM</p>

      <button className="w-full border-2 border-purple-900 rounded-full py-3 mt-6">
        BUY NOW
      </button>
    </div>
  </div>

</div>
        <div className="text-center">
          <h1 className='text-4xl font-bold text-blue-800'>Host on the Cloud to Keep Growing <br /></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, voluptatem.</p>
        </div>

<div className="flex flex-row gap-20">
          <div className="mx-20 py-6">
          <h1 className='text-2xl text-blue-800'>Super Easy to Use <br /></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam <br /> obcaecati vel ad unde est illo at. Labore excepturi officia <br />
 dolores!
</p>
<p className='text-orange-600'>Learn More</p>
        </div>
<div className="">
  <img src={Trading} alt="Trading"  className="w-full max-w-md object-contain"/>
</div>
</div>
<div className="flex flex-row ">
  <div className="mx-20">
    <img src={Signal} alt="Signal"  className="w-full max-w-md object-contain"/>
  </div>
          <div className="mx-20 py-6">
          <h1 className='text-2xl text-blue-800'>Simply Fast Websites <br /></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam <br /> obcaecati vel ad unde est illo at. Labore excepturi officia <br />
 dolores!
</p>
<p className='text-orange-600'>Learn More</p>
        </div>
</div>

<div className="flex flex-row gap-20">
          <div className="mx-20 py-6">
          <h1 className='text-2xl text-blue-800'>Wordpress Made Easy <br /></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam <br /> obcaecati vel ad unde est illo at. Labore excepturi officia <br />
 dolores!
</p>
<p className='text-orange-600'>Learn More</p>
        </div>
<div className="">
  <img src={Website} alt="Trading"  className="w-full max-w-md object-contain"/>
</div>
</div>
<div className="flex flex-row ">
  <div className="mx-20">
    <img src={Signal} alt="Signal"  className="w-full max-w-md object-contain"/>
  </div>
          <div className="mx-20 py-6">
          <h1 className='text-2xl text-blue-800'>24/7 Expert Support <br /></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam <br /> obcaecati vel ad unde est illo at. Labore excepturi officia <br />
 dolores!
</p>
<p className='text-orange-600'>Learn More</p>
        </div>
</div>

<div className="bg-black">
<div className="text-center text-white text-4xl font-bold">User-friendly Control Panel</div>
  <div className="flex flex-row gap-20 mx-20">
    <div className="">
  <img src={Ipad} alt="Trading"  className="w-full max-w-md object-contain"/>
</div>
<div className="text-white mx-20 py-6">
  <h1 className='font-bold text-2xl'>Easy Start & Managed Updates <br /></h1>
Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veniam quisquam, ex nostrum vero voluptates dicta <br /> excepturi vel perspiciatis consequuntur ab.

<h1 className='font-bold text-2xl'>Staging, GIT & WP-CLI <br /></h1>
Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veniam quisquam, ex nostrum vero voluptates dicta <br /> excepturi vel perspiciatis consequuntur ab.

<h1 className='font-bold text-2xl'>Dynamic Caching & More <br /></h1>D
Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Veniam quisquam, ex nostrum vero voluptates dicta <br /> excepturi vel perspiciatis consequuntur ab.
</div>
</div>
</div>
<div className="text-center">
  <h1 className='font-bold text-5xl text-blue-800'>What our Customers are Saying <br /></h1>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ipsam.
</div>

<div className="flex flex-row mx-20 gap-20 py-10 ">
     <div className="">
  <img src={Smiling} alt="Trading"  className="w-full max-w-md object-contain"/>
</div>
<div className="">
   Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Incidunt optio officiis dolore <br /> earum error eaque perferendis laudantium sed <br /> praesentium dolorum. 

<p className=' py-2 text-3xl text-blue-950'>John Smith</p>
<p>ABC Company</p>
</div>
    </div>
    <div className="bg-blue-500 flex flex-row mx-10 my-10  py-15 rounded-xl">
      <div className="text-white mx-20 ">
        <h1 className='text-3xl font-bold'>Ready to Get Started? </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum in dolor molestiae vero. <br />Ea veritatis qui consectetur debitis nulla.</div>
        <button className="mt-8 bg-green-300 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold">
            GET STARTED
          </button>
    </div>
    
            <div className="bg-black text-white px-20 py-10 flex justify-between">
  <div className="flex flex-col gap-4 max-w-xs">
    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>
    <p className="text-sm">
      Moshify Copyright 2020 <br />
      Mosh Hamedani
    </p>
  </div>
  <div className="flex gap-20">
    <div>
      <h2 className="font-bold mb-2">Products</h2>
      <p>Website Hosting</p>
      <p>Free Automated</p>
      <p>WordPress</p>
      <p>Migrations</p>
    </div>
    <div>
      <h2 className="font-bold mb-2">Company</h2>
      <p>About</p>
      <p>Affiliates</p>
      <p>Blog</p>
    </div>
    <div>
      <h2 className="font-bold mb-2">Support</h2>
      <p>Contact</p>
      <p>Knowledge Base</p>
      <p>FAQ</p>
    </div>
    <div>
      <h2 className="font-bold mb-2">Domains</h2>
      <p>Domain Checker</p>
      <p>Domain Transfer</p>
      <p>Free Domain</p>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Portifilo