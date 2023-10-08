import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {

    const { user } = useContext(AuthContext)
    
    const handleEdit=()=>{
        toast('Editing profile coming soon')
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto py-10">
                <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg text-center">
                    <div className="mb-6">
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold">{user.displayName}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                    <button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Edit Profile
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Profile;
