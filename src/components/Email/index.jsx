/*
import {useState, useEffect} from "react";
import axios from "axios";

const Form = ({style = "4", rtl}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    agreed: false,
  });
  const [success, setSuccessful] = useState("");
  const [errors, setErrors] = useState({agreed: ""});
  const [captchaError,setCaptchaError] = useState("")
   const [captchaCode, setCaptchaCode] = useState();
   const [userInput, setUserInput] = useState("");
   const [isCorrect, setIsCorrect] = useState(false);

   const handleInputChange = (e) => {
     setUserInput(e.target.value);
   };

   const generateRandomCode = (length) => {
     const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     let code = "";
     for (let i = 0; i < length; i++) {
       const randomIndex = Math.floor(Math.random() * charset.length);
       code += charset[randomIndex];
     }
     return code;
   };

   useEffect(() => {
    let code=  generateRandomCode(6)
    setCaptchaCode(code)
   }, [])
   


   const regenerateCaptcha = (e) => {
     e.preventDefault();
     setCaptchaCode(generateRandomCode(6));
     setUserInput("");
     setIsCorrect(false);
   };

  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    if (userInput === captchaCode) {
  //      alert("Captcha Matched");
  //      setIsCorrect(true);
  //      // onData(true)
  //    } else {
  //      setIsCorrect(false);
  //      alert("Captcha not Matched");
  //    }
  //  };

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleCheckboxChange = (e) => {
    const {checked} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      agreed: checked,
    }));
    // Clear the associated error when the checkbox is checked
    setErrors((prevErrors) => ({
      ...prevErrors,
      agreed: "",
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
     if (userInput === captchaCode) {
       setCaptchaError("Captcha Matched");
       setIsCorrect(true);
       // onData(true)
     } else {
       setIsCorrect(false);
       setCaptchaError("Captcha not Matched");
     }

    const newErrors = {};
    if (!isCorrect) {
      setCaptchaError("enter correct captcha");
    } else {
      setCaptchaError("");
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.comments.trim()) {
      newErrors.comments = "Please enter Your comments";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.agreed) {
      newErrors.agreed = "You must agree to the terms and conditions";
    }

    console.log('====================================');
    console.log(
      "userInput.trim().toLowerCase() !== captchaCode.trim().toLowerCase()",
      userInput.trim().toLowerCase() !== captchaCode.trim().toLowerCase()
    );
    console.log('====================================');

    if (
      Object.keys(newErrors).length > 0 ||
      userInput.trim().toLowerCase() !== captchaCode.trim().toLowerCase()
    ) {
      setErrors(newErrors);
      console.log("new errors",newErrors);
      console.log("Form has errors. Please check your inputs.");
    } else {
      console.log("Form is valid. Submitting...", formData);
      try {
        let body = {
          name: formData.name,
          comment: formData.comments,
          email: formData.email,
          phoneno: formData.phone,
        };
        const isEmailSent = await axios.post(
          "http://localhost:3000/api/api_email",
          body
        );
        console.log("isEmailSent", isEmailSent);

        if (isEmailSent.data==="success") {
          console.log("Email sent successfully");
          setSuccessful("Mail sent Successfully");
          regenerateCaptcha();
          // Clear success message after 3 seconds (adjust as needed)
          setTimeout(() => {
            setSuccessful("");
          }, 3000);
          setFormData({
            name: "",
            email: "",
            phone: "",
            comments: "",
            agreed: false,
          });
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email: ", error);
      }
    }
  };

  return (
    <section
      className={`contact section-padding pt-${
        style === "4" ? "0" : "50"
      } style-6`}
    >
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                className="form"
                method="post"
                onSubmit={handleFormSubmit}
              >
                <p className="text-center fs-16px mb-30">
                  The field is required mark as{" "}
                  <span className="text-danger">*</span>
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={rtl ? "الاسم" : "Name *"}
                        value={formData.name}
                        onChange={handleFormChange}
                      />
                      <div className="text-danger text-center mt-2  fs-12px">
                        {errors.name}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        className="form-control"
                        placeholder={
                          rtl ? "البريد الالكترونى *" : "Email Address *"
                        }
                        onChange={handleFormChange}
                      />
                      <div className="text-danger text-center mt-2 fs-12px">
                        {errors.email}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        placeholder={
                          rtl ? "رقم الهاتف (اختياري)" : "Phone Number *"
                        }
                        onChange={handleFormChange}
                      />
                      <div className="text-danger text-center mt-2  fs-12px">
                        {errors.phone}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <div className="container captcha">
                        <div className="col">
                          <input
                            placeholder="Enter Captcha"
                            id="user_captcha_input"
                            name="user_captcha_input"
                            type="text"
                            className="form-control"
                            value={userInput}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mt-3 ms-3">                         
                          <span className="captchacode me-2">{captchaCode}</span>
                          <button
                            onClick={regenerateCaptcha}
                            className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                          >
                            Regenerate
                          </button>
                        </div>
                        <div className="text-danger text-center mt-2 fs-12px">
                          {captchaError}
                        </div>
                        </div>

                    
                    </div>
                  </div>

                  <div className="col-lg-12 mt-30 mb-30">
                    <div className="form-group">
                      <textarea
                        rows="5"
                        name="comments"
                        value={formData.comments}
                        className="form-control"
                        placeholder={rtl ? "تعليقات" : "Comments"}
                        onChange={handleFormChange}
                      ></textarea>
                      <div className="text-danger text-center mt-2 fs-12px">
                        {errors.comments}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 text-center">
                    <div className="form-check d-inline-flex mt-30 mb-30">
                      <input
                        className="form-check-input me-2 mt-0"
                        type="checkbox"
                        checked={formData.agreed}
                        id="flexCheckDefault"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="flexCheckDefault"
                      >
                        <span>
                          By submitting, I agree to the
                          <a className="text-decoration-underline">
                            Terms & Conditons
                          </a>
                        </span>
                      </label>
                    </div>
                    <div className="text-danger fs-20px mb-20">
                      {errors.agreed}
                    </div>
                    <div className="text-text-success fs-20px mb-20">
                      {success}
                    </div>
                  </div>

                  <div></div>
                  <div className="col-lg-12 text-center">
                    <input
                      type="submit"
                      value={rtl ? "ارسل طلبك" : "Send Your Request"}
                      className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
*/


import {useState, useEffect} from "react";
import axios from "axios";

const Form = ({style = "4", rtl}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    agreed: false,
  });
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({agreed: ""});
  const [captchaError, setCaptchaError] = useState(true);
  const [captchaCode, setCaptchaCode] = useState();
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const generateRandomCode = (length) => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      code += charset[randomIndex];
    }
    return code;
  };

  useEffect(() => {
    regenerateCaptcha();
  }, []);

  const regenerateCaptcha = () => {
    const code = generateRandomCode(6);
    setCaptchaCode(code);
    setUserInput("");
    setIsCorrect(false);
  };

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleCheckboxChange = (e) => {
    const {checked} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      agreed: checked,
    }));
    // Clear the associated error when the checkbox is checked
    setErrors((prevErrors) => ({
      ...prevErrors,
      agreed: "",
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (userInput === captchaCode) {
      setCaptchaError(true);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setCaptchaError(false);
    }

    const newErrors = {};

    for (const field of ["name", "comments", "email", "phone"]) {
      if (!formData[field].trim()) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.agreed) {
      newErrors.agreed = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    console.log('====================================');
    console.log(newErrors);
    console.log('====================================');
    if (Object.keys(newErrors).length === 0) {

      try {
        const body = {
          name: formData.name,
          comment: formData.comments,
          email: formData.email,
          phoneno: formData.phone,
        };

        const isEmailSent = await axios.post(
          "http://localhost:3000/api/api_email",
          body
        );
          console.log(isEmailSent.data, "success");

        if (isEmailSent.data === "Success") {
          console.log(isEmailSent.data , "success");
             setFormData({
               name: "",
               email: "",
               phone: "",
               comments: "",
               agreed: false,
             });
          regenerateCaptcha();
          // Clear success message after 3 seconds (adjust as needed)
          setTimeout(() => {
              setSuccess("Mail sent Successfully");
          },);

          setTimeout(() => {
            setSuccess("");
          }, 6000);
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email: ", error);
      }
    }
  };

  return (
    <section
      className={`contact section-padding pt-${
        style === "4" ? "0" : "50"
      } style-6`}
    >
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <section className="form">
                <p className="text-center fs-16px mb-30">
                  The field is required mark as{" "}
                  <span className="text-danger">*</span>
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={rtl ? "الاسم" : "Name *"}
                        value={formData.name}
                        onChange={handleFormChange}
                      />
                      <div className="text-danger text-center mt-2  fs-12px">
                        {errors.name}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        className="form-control"
                        placeholder={
                          rtl ? "البريد الالكترونى *" : "Email Address *"
                        }
                        onChange={handleFormChange}
                      />
                      <div className="text-danger text-center mt-2 fs-12px">
                        {errors.email}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        placeholder={
                          rtl ? "رقم الهاتف (اختياري)" : "Phone Number *"
                        }
                        onChange={handleFormChange}
                      />
                      <div className="text-danger text-center mt-2  fs-12px">
                        {errors.phone}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <div className="container captcha">
                        <div className="col">
                          <input
                            placeholder="Enter Captcha"
                            id="user_captcha_input"
                            name="user_captcha_input"
                            type="text"
                            className="form-control"
                            value={userInput}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mt-3 ms-3">
                          <span className="captchacode me-2">
                            {captchaCode}
                          </span>
                          <button
                            onClick={regenerateCaptcha}
                            className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                          >
                            Regenerate
                          </button>
                        </div>
                        <div className="text-danger text-center mt-2 fs-12px">
                          {captchaError===false?"captcha Not Matched":""}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-30 mb-30">
                    <div className="form-group">
                      <textarea
                        rows="5"
                        name="comments"
                        value={formData.comments}
                        className="form-control"
                        placeholder={rtl ? "تعليقات" : "Comments"}
                        onChange={handleFormChange}
                      ></textarea>
                      <div className="text-danger text-center mt-2 fs-12px">
                        {errors.comments}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 text-center">
                    <div className="form-check d-inline-flex mt-30 mb-30">
                      <input
                        className="form-check-input me-2 mt-0"
                        type="checkbox"
                        checked={formData.agreed}
                        id="flexCheckDefault"
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="flexCheckDefault"
                      >
                        <span>
                          By submitting, I agree to the
                          <a className="text-decoration-underline">
                            Terms & Conditons
                          </a>
                        </span>
                      </label>
                    </div>
                    <div className="text-danger fs-20px mb-20">
                      {errors.agreed}
                    </div>
                    <div className="text-success fs-20px mb-20">
                      {success}
                    </div>
                  </div>

                  <div></div>
                  <div className="col-lg-12 text-center">
                    <input
                      type="submit"
                      onClick={handleFormSubmit}
                      value={rtl ? "ارسل طلبك" : "Send Your Request"}
                      className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;