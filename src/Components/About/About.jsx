import Navbar from "../Navbar/Navbar";


const About = () => {
  return (
    <div className=" max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div className="bg-white py-16 mx-auto container">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Event Management</h2>
          <p className="text-gray-600">We are passionate about creating unforgettable experiences.</p>
        </div>
        <div className="grid grid-cols-2 -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">To bring people together through incredible events, leaving lasting memories and smiles on every face.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">To be the leading event management company, known for creativity, professionalism, and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
