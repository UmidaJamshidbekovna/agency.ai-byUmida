import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesData = [
        {
            title: "Advertising",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.',
            icon: assets.ads_icon
        },
         {
            title: "Content marketing",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.',
            icon: assets.marketing_icon
        },
        {
            title: "Content writing",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.',
            icon: assets.content_icon
        },
         {
            title: "Social Media",
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, non.',
            icon: assets.social_icon
        },
    ]

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
        <img src={assets.bgImage2} alt=""  className=' absolute -top-110 -left-70 -z-1 dark:hidden'/>

        <Title title={"How can we help ?"} desc={"From strategy to execution, we craft digital solutions that move your business forward"}/>

        <div className=' flex flex-col md:grid grid-cols-2'>
            {
                servicesData.map((service, index)=>(
                    <ServiceCard key={index} service={service} index={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Services