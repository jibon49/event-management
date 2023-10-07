import { createContext,  useEffect, useState } from "react";

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

export default ServiceProvider;