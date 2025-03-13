import { useFormContext } from "./FormContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  age: yup.number().positive().integer().required("Age is required"),
  favoriteLanguage: yup.string().required("Select a language"),
});

const FormPage = () => {
  const { setFormData } = useFormContext();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    setFormData(data);
    navigate("/display");
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Personal Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("fullName")} placeholder="Full Name" />
          <p>{errors.fullName?.message}</p>

          <input {...register("email")} placeholder="Email" type="email" />
          <p>{errors.email?.message}</p>

          <input {...register("phoneNumber")} placeholder="Phone Number" />
          <p>{errors.phoneNumber?.message}</p>

          <input {...register("age")} placeholder="Age" type="number" />
          <p>{errors.age?.message}</p>

          <select {...register("favoriteLanguage")}>
            <option value="">Select Language</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
          </select>
          <p>{errors.favoriteLanguage?.message}</p>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;