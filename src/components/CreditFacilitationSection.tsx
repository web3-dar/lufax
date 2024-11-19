import img from '../images/index_errand_2.ae5bbb52.png';

const CreditFacilitationSection = () => {
  return (

    <>


<h1 className='text-center  text-5xl font-semibold m-4 text-gray-700'>Our Mission</h1>
 <br />
<p className='text-center  text-xl font-medium m-4 text-gray-500 w-[80%] m-auto mb-7'>Our mission is to foster small business competitiveness and sustainability by providing individual entrepreneurs with easy access to inclusive products and services and empowering institutional partners to reach and serve SBOs efficiently.</p>
  
    <section className="flex flex-col md:flex-row items-center md:items-start bg-white p-6 ">
      {/* Left Image Section */}
      <div className="w-full  relative overflow-hidden">
        <img
          src={img}
          alt="Credit Facilitation Services"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full  flex flex-col justify-center  mt-6  ">
        <h2 className="text-3xl  font-semibold text-gray-700 mb-9 py-9">
          Convenient and Accessible Retail Credit Facilitation Services
        </h2>
        <p className="  font-medium m-4 text-gray-500 text-xl m-auto mb-9">
          We have a number of advanced technology solutions, providing customers
          with credit facilitation services through the entire online business
          process to meet the credit needs of small business owners.
        </p>
        <a
          href="#"
          className="text-gray-600 flex items-center text-2xl font-medium hover:text-blue-300"
        >
          Learn More
          <span className="ml-2 text-3xl">
            ➔
          </span>
        </a>
      </div>
    </section></>
  );
};

export default CreditFacilitationSection;
