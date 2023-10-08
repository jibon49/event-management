import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EventRegistration = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast('Event Registration Successful')
        e.target.reset();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto py-10">
                <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Event Registration</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            <input type="text" id="fullName" name="fullName" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="eventName" className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
                            <input type="text" id="eventName" name="eventName" className="w-full border border-gray-300 p-2 rounded" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">Comments</label>
                            <textarea id="comments" name="comments" className="w-full border border-gray-300 p-2 rounded" rows="4" required></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default EventRegistration;