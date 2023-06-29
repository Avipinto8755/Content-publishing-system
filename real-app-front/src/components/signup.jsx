import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

const SignUp = ({ redirect = "/" }) => {
  const [error, setError] = useState("");
  const { user, createUser } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        email: Joi.string()
          .min(6)
          .max(255)
          .required()
          .email({ tlds: { allow: false } }),
        name: Joi.string().min(2).max(255).required(),
        password: Joi.string()
          .min(8)
          .max(25)
          .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "password"
          )
          .required(),
      });

      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        const errorKey = detail.path[0];
        errors[errorKey] = detail.message;
      }
      return errors;
    },

    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: false });
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="row ">
        <div className="col-sm-3"></div>
        <div className="border border-3 mt-5 rounded col-sm-6 ">
          <PageHeader title="Sign Up " description="signup it is free" />
          <form onSubmit={form.handleSubmit} noValidate>
            {error && <div className="alert alert-danger">{error}</div>}
            <Input
              {...form.getFieldProps("email")}
              type="email"
              label="Email"
              required
              error={form.touched.email && form.errors.email}
            />
            <Input
              {...form.getFieldProps("name")}
              type="text"
              label="Name"
              required
              error={form.touched.name && form.errors.name}
            />
            <Input
              {...form.getFieldProps("password")}
              type="password"
              label="Password"
              autoComplete="on"
              required
              error={form.touched.password && form.errors.password}
            />

            <div className="my-2">
              <button
                type="click"
                disabled={!form.isValid}
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-3 "></div>
      </div>
    </>
  );
};

export default SignUp;
