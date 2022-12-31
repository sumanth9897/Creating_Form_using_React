
import React, { useState } from "react";

const RegForm = (props) => {
    const [Customer, setCust] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        course: "",
        gender: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        retypePassword: "",
    });

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(Customer);
        props.onSubmit(Customer);
        setCust({
            firstname: "",
            middlename: "",
            lastname: "",
            course: "",
            gender: "",
            phone: "",
            address: "",
            email: "",
            password: "",
            retypePassword: "",
        });
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <label>First Name:</label>
                <input
                    type="text"
                    value={Customer.firstname}
                    required={true}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return { ...prevCust, firstname: e.target.value };
                        })
                    }
                />
                <br />
                <br />
                <label>Middle Name:</label>
                <input
                    type="text"
                    value={Customer.middlename}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return { ...prevCust, middlename: e.target.value };
                        })
                    }
                />
                <br />
                <br />
                <label>Last Name:</label>
                <input
                    required={true}
                    type="text"
                    value={Customer.lastname}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return { ...prevCust, lastname: e.target.value };
                        })
                    }
                />
                <br />
                <br />
                <label htmlFor="course">Course:</label>
                <select
                    required={true}
                    name="course"
                    id="course"
                    value={Customer.course}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return { ...prevCust, course: e.target.value };
                        })
                    }>
                    <option>--Select the Course--</option>
                    <option value="FDFED">FDFED</option>
                    <option value="OOPS">OOPS</option>
                    <option value="DBMS">DBMS</option>
                    <option value="ML">ML</option>

                </select>
                <br />
                <br />
                <label htmlFor="gender">Gender :</label>
                <br />
                <div
                    onChange={(e) => {
                        setCust((prevCust) => {
                            {
                                return { ...prevCust, gender: e.target.value };
                            }
                        });
                    }}>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="Male"
                        defaultChecked={true}
                    />
                    <label htmlFor="male">Male</label>
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <br />
                <br />
                <label>Phone:</label>
                <input value="+91" style={{ width: 20 }} />
                <input
                    required={true}
                    type="text"
                    value={Customer.phone}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return { ...prevCust, phone: e.target.value };
                        })
                    }
                />
                <br />
                <br />
                <label>Address :</label>
                <br />
                <textarea
                    required={true}
                    cols="80"
                    rows="10"
                    value={Customer.address}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return { ...prevCust, address: e.target.value };
                        })
                    }></textarea>
                <br />
                <br />
                <label>Email Id :</label>
                <input
                    required={true}
                    type="email"
                    value={Customer.email}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return { ...prevCust, email: e.target.value };
                        })
                    }
                />
                <br />
                <br />
                <label>Password :</label>
                <input
                    required={true}
                    type="password"
                    value={Customer.password}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return { ...prevCust, password: e.target.value };
                        })
                    }
                />
                <br />
                <br />
                <label>Retype the Password:</label>
                <input
                    required={true}
                    type="password"
                    value={Customer.retypePassword}
                    onChange={(e) =>
                        setCust((prevCust) => {
                            return {
                                ...prevCust,
                                retypePassword: e.target.value,
                            };
                        })
                    }
                />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>
    );
};

export default RegForm;