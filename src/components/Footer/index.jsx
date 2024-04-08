import './footer.css';

export default function Footer() {
  return (
    <div>
     <div className="flex flex-col justify-center items-center gap-7 sm:flex-row sm:gap-36 sm:mt-24">
  <img src="src/assets/image 30.png" alt="" className="w-44 h-12 sm:mr-4 sm:mt-8" />
  <img src="src/assets/image 27.png" alt="" className="w-44 h-12 sm:mr-4 sm:mt-8" />
  <img src="src/assets/image 29.png" alt="" className="w-48 h-11 sm:mr-4 sm:mt-8" />
  <img src="src/assets/image 28.png" alt="" className="w-48 h-6 sm:mt-12" />
</div>
      <footer className="bg-blue-100 py-4 mt-11">
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
        <div className='ml-6 mt-16'>
  <img src="src/assets/logo.png" alt="" className="w-32 ml-10 sm:ml-0 mt-8" />
  <p className="ml-10 text-gray-500 mt-2 sm:ml-0 text-sm">
    Nam posuere accumsan porta. Integer <br />id tincidunt sit amet sed libero.
  </p>
</div>
          <div className="foo_section flex flex-col items-center mt-28 sm:flex-row sm:justify-center sm:mt-[90px] sm:space-x-7 sm:ml-14">
  <ul className="mb-4 sm:mb-0 mr-7">
    <li className="first mb-2">COMPANY</li>
    <li className="text-gray-500 text-sm">Donec dignissim</li>
    <li className="text-gray-500 text-sm">Curabitur egestas</li>
    <li className="text-gray-500 text-sm">Nam posuere</li>
    <li className="text-gray-500 text-sm">Aenean facilisis</li>
  </ul>
  <ul className="mb-4 sm:mb-0">
    <li className="first mb-2">SERVICES</li>
    <li className="text-gray-500 text-sm">Cras convallis</li>
    <li className="text-gray-500 text-sm">Vestibulum faucibus</li>
    <li className="text-gray-500 text-sm">Quisque lacinia purus</li>
    <li className="text-gray-500 text-sm">Aliquam nec ex</li>
  </ul>
  <ul className="mb-6">
    <li className="first mb-2">RESOURCES</li>
    <li className="text-gray-500 text-sm">Suspendisse porttitor</li>
    <li className="text-gray-500 text-sm">Nam posuere</li>
    <li className="text-gray-500 text-sm">Curabitur egestas</li>
  </ul>
</div>
        </div>
        <div className="flex justify-center sm:justify-end mt-8 sm:mt-[-110px] sm:mr-12 sm:space-x-4">
  <div className="flex space-x-4">
    <img src="src/assets/Group 9.png" alt="" />
    <img src="src/assets/Group 9 Copy.png" alt="" />
    <img src="src/assets/Group 9 Copy 2.png" alt="" />
    <img src="src/assets/Group 9 Copy 3.png" alt="" />
  </div>
</div>
<div className="footer-section">
    <div className="mr-20 mt-4 flex justify-end">
      <select id="lang" name="lang" className="ml-auto w-48 border border-teal-400">
        <option value="English">English</option>
        <option value="hindi">Hindi</option>
      </select>
    </div>
    <div className="plant flex justify-end">
      <img src="src/assets/Plant.png" alt="" className="w-56 h-40 mt-[-7px] mr-16 sm:mr-0" />
    </div>
  </div>
</footer>
    </div>
  );
}
