import React from "react";

export  const Appcontext = React.createContext()

export const ContextProvider = (props)=>{

    const[pickDate , setPickDate] = React.useState(new Date())
    const[pickTime , setPickTime] = React.useState()
    const[serviceType , setServiceType] = React.useState("Service Types")
    const[clientName , setClientName] = React.useState()
    const[clientPhone , setClientPhone] = React.useState()
    const[clientEmail , setClientEmail] = React.useState()
    const[clientAddress, setClientAddress] = React.useState()
    const[allAppointments , setAllAppointments] = React.useState()
    return(
       <Appcontext.Provider value={{pickDate , setPickDate ,pickTime , setPickTime,
        serviceType , setServiceType , clientName , setClientName ,clientPhone , setClientPhone,
        clientEmail , setClientEmail , clientAddress , setClientAddress ,allAppointments , setAllAppointments}}>
           {props.children}
       </Appcontext.Provider>
    )
}