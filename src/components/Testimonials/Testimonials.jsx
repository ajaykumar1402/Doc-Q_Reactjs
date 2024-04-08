import './Testimonials.css';

export default function Testimonials() {
    return (
      <div className='top'>
        <h1 className='text-3xl font-semibold ml-4 md:ml-12'>Testimonials</h1>
        <p className='text-gray-500 custom-class mt-2 mx-4 md:mx-12'>Our team of skilled medical professionals and aids ensure that<br/> you get the care you need and deserve.</p>
        <div>
          <img src="src/assets/Indicators.png" className='w-36 ml-72 mt-2'/>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 mt-1">
          <img src="src/assets/Group 56.png" alt="" className="mt-6 md:mt-14 md:w-72 md:h-64"/>
          <img src="src/assets/Group 57.png" alt="" className="mt-6 md:mt-14 md:w-72 md:h-64"/>
          <img src="src/assets/Group 58.png" alt="" className="mt-6 md:mt-14 md:w-72 md:h-64"/>
          <img src="src/assets/Group 59.png" alt="" className="mt-6 md:mt-14 md:w-72 md:h-64"/>
        </div>
        <div className="flex justify-center mt-8">
          <img src="src/assets/Contact CTA.png" alt="" className="w-full md:w-8/12 "/>
        </div>
      </div>
    )
}
