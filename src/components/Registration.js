
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const CompRegistrations = [
    {
        firstname: "sumanth",
        middlename: "",
        lastname: "teja",
        course: "CSE",
        gender: "Male",
        phone: "9052623378",
        address: "Guntur,Andhrapradesh",
        email: "sarantejasumanth.m20@iiits.in",
        password: "sumanth1239",
    },
];


const Registration = (props) => {
    const [TotalReg, setAllReg] = useState(CompRegistrations)

    const submitHandler = (entry) => {
        console.log(entry)
        let presentReg = TotalReg.slice();
        presentReg.push(entry)
        setAllReg(presentReg)
        props.returnDetails(TotalReg);
    }

    props.returnDetails(TotalReg);
    return (
        <div>
            <RegistrationForm onSubmit={submitHandler} />
        </div>
    );
};

export default Registration;

/***********************************************************************/

