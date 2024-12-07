"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

const CabEnquiryForm = ({ selectedPackage }) => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        travelDate: "",
        numberOfTravellers: "",
        otherRequest: "",
        selectedPackage: selectedPackage || "",
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Button state
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [isSubmitted, setIsSubmitted] = useState(false); // Submission state

    useEffect(() => {
        const isValid = formData.name.length >= 4 && formData.contact.length >= 10;

        setIsButtonDisabled(!isValid); // Disable button if form is invalid
    }, [formData]);

    const formattedData = {
        ...formData,
        contact: parseInt(formData.contact),
        numberOfTravellers: parseInt(formData.numberOfTravellers),
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]:
                type === "checkbox"
                    ? checked
                    : name === "name"
                        ? value.charAt(0).toUpperCase() + value.slice(1)
                        : value, // Capitalize the first letter of the name
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(
                "https://backend-jts.onrender.com/api/cab-enquiry",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formattedData),
                }
            );

            // response
            const res_data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    contact: "",
                    email: "",
                    travelDate: "",
                    numberOfTravellers: "",
                    otherRequest: "",
                    selectedPackage: selectedPackage || "",
                });
            } else {
                toast.error(res_data.extraDetails || "Error submitting Form");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container contact-container px-0">
            <div className="row d-flex flex-column justify-content-center align-items-center w-100">
                <div className="w-100 contact-popup">
                    {isSubmitted ? (
                        <div className="insider pt-3 rounded-4 shadow-none form-success-insider">
                            <h4 className="web-title text-center text-capitalize fw-bold p-3 rounded-4 text-black d-flex justify-content-center flex-column gap-2 align-items-center bg-tertary w-100" style={{ width: '100% !important' }}>
                                <FaCheck className="icon-success" />
                                enquiry submitted successfully
                            </h4>
                            <hr />
                            <p className="text-center text-black mb-0">
                                Contact <span className="fw-bold">Mr. Harsh</span> for further
                                assistance:{" "}
                            </p>
                            <div className="w-100 bg-white py-2 d-flex flex-column justify-content-center align-items-center">
                                <a
                                    href="tel:+91-9024337038"
                                    target="_blank"
                                    className="p-3 px-3 fw-bold social-icon w-auto"
                                >
                                    <IoMdCall className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{" "}
                                    <span className="px-2"></span>+91-9024337038
                                </a>
                                <a
                                    href="https://wa.me/919166555888"
                                    target="_blank"
                                    className=" p-3 px-3 fw-bold social-icon w-auto"
                                >
                                    <IoLogoWhatsapp className="mx-0 bg-black text-white p-2 fs-1 rounded-5 icon" />{" "}
                                    <span className="px-2"></span>+91-9166555888
                                </a>
                                <hr />
                                <p className="text-center package-form p-2 mx-3 w-100 mt-2">
                                    {" "}
                                    <span className="fw-bold text-uppercase">Thankyou!</span>
                                </p>
                            </div>
                        </div>
                    ) : (
                        // Show the form if not submitted
                        <form
                            className="d-flex flex-column gap-2 justify-content-center p-0"
                            onSubmit={handleSubmit}
                        >
                            <div className="w-100 py-4">
                                <h3 className="rounded-2 text-capitalize mb-0 p-4 package-form web-title">
                                    {selectedPackage ? (
                                        <>
                                            <span className="fw-bold">rental Enquiry for </span>
                                            <span className="package-form-name">{selectedPackage}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="fw-bold">Plan Your Journey </span>
                                            <span className="package-form-name text-capitalize">
                                                With Us
                                            </span>
                                        </>
                                    )}
                                </h3>
                            </div>
                            <div className="row p-4">
                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 my-2">
                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 col-sm-12 my-2">
                                    <input
                                        type="number"
                                        placeholder="Contact*"
                                        name="contact"
                                        required
                                        value={formData.contact}
                                        onChange={handleChange}
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 my-2">
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 my-2">
                                    <input
                                        type="date"
                                        placeholder="Travel Date"
                                        name="travelDate"
                                        required
                                        value={formData.travelDate}
                                        onChange={handleChange}
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 my-2 w-100">
                                    <input
                                        type="number"
                                        placeholder="no. of travellers"
                                        name="numberOfTravellers"
                                        value={formData.numberOfTravellers}
                                        onChange={handleChange}
                                        className="w-100"
                                    />
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 my-2">
                                    <textarea
                                        placeholder="Other Request"
                                        name="otherRequest"
                                        className="w-100"
                                        cols={40}
                                        rows={2}
                                        value={formData.otherRequest}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 my-2 w-100 d-flex gap-2 justify-content-start align-items-center">
                                    <label className="check-container px-2 d-flex justify-content-center align-items-center">
                                        <input type="checkbox" name="terms" id="terms" required />
                                        <svg viewBox="0 0 64 64" height="1.35em" width="1.35em">
                                            <path
                                                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                                pathLength="575.0541381835938"
                                                className="path"
                                            ></path>
                                        </svg>
                                    </label>
                                    {/* <input type="checkbox" /> */}
                                    <p className="mb-0 fs-6">Confirm details meet requirements.</p>
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={isButtonDisabled || isLoading}
                                className={`btn-submit mx-3 mb-2 rounded-4 ${isButtonDisabled || isLoading
                                    ? "submit-disabled"
                                    : "submit-active"
                                    }`}
                            >
                                {isLoading ? <div className="loading-spinner"></div> : "Submit"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CabEnquiryForm;
