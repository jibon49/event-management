import { createContext,  useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const ServiceContext = createContext()

const ServiceProvider = ({children}) => {

    const [service, setService] = useState([])

    useEffect(()=>{
        fetch('/servicesJson.json')
        .then(res=>res.json())
        .then(data=>setService(data))
        
    },[])


    const serviceInfo={
        service
    }

    return (
        <ServiceContext.Provider value={serviceInfo}>
            {children}
        </ServiceContext.Provider>
    );
};

ServiceProvider.propTypes = {
    children: PropTypes.object
};

export default ServiceProvider;