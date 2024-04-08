import './TopSpecialist.css';

export default function TopSpecialist() {
  return (
    <div className='top'>
      <h1 className="text-3xl font-semibold ml-10 mt-8">Top Specialist</h1>
      <div className="special grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8 my-12">
        <div className="custom-img border border-teal-400 p-4 rounded-md">
          <img src="src/assets/Rectangle 33.png" alt="" className="mb-4"/>
          <div className="content text-center">
            <h2 className="font-bold">Dr. Travis Oman</h2>
            <p>Opthalmologist</p>
            <button className="btn text-white px-6 py-2 rounded mt-4">Book Now</button>
            <p className='para'>120 Reviews</p>
          </div>
        </div>
        <div className="custom-img border border-teal-400 p-4 rounded-md">
          <img src="src/assets/Rectangle 34.png" alt="" className="mb-4" />
          <div className="content text-center">
            <h2 className="font-bold">Dr. Annah Ray</h2>
            <p>Dentist</p>
            <button className="btn text-white px-6 py-2 rounded mt-4">Book Now</button>
            <p className='para'>120 Reviews</p>
          </div>
        </div>
        <div className="custom-img border border-teal-400 p-4 rounded-md">
          <img src="src/assets/Rectangle 35.png" alt="" className="mb-4" />
          <div className="content text-center">
            <h2 className="font-bold">Dr. Rechard Brook</h2>
            <p>Gastroenterologist</p>
            <button className="btn text-white px-6 py-2 rounded mt-4">Book Now</button>
            <p className='para'>120 Reviews</p>
          </div>
        </div>
        <div className="custom-img border border-teal-400 p-4 rounded-md">
          <img src="src/assets/Rectangle 36.png" alt="" className="mb-4" />
          <div className="content text-center">
            <h2 className="font-bold">Dr. Vivian Monroe</h2>
            <p>Pediatric Surgeon</p>
            <button className="btn text-white px-6 py-2 rounded mt-4">Book Now</button>
            <p className='para'>120 Reviews</p> 
          </div>
        </div>
      </div>
    </div>
  )
}
