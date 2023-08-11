import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardsService from "../services/cardsService";

const CardsCreate = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate(values) {
      const schema = Joi.object({
        bizName: Joi.string().min(2).max(255).required().label("Name"),
        bizDescription: Joi.string()
          .min(2)
          .max(1024)
          .required()
          .label("Description"),
        bizAddress: Joi.string().min(2).max(400).required().label("Address"),
        bizPhone: Joi.string()
          .min(9)
          .max(10)
          .required()
          .regex(/^0[2-9]\d{7,8}$/)
          .label("Phone"),
        bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
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
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }
        cardsService.createCard(body);
        navigate("/my-cards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <>
      <PageHeader title="Create Card" description="Create a new Card" />
      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("bizName")}
          type="text"
          label="Name"
          required
          error={form.touched.bizName && form.errors.bizName}
        />

        <Input
          {...form.getFieldProps("bizDescription")}
          type="text"
          label="Description"
          autoComplete="on"
          required
          error={form.touched.bizDescription && form.errors.bizDescription}
        />
        <Input
          {...form.getFieldProps("bizAddress")}
          type="text"
          label="Address"
          required
          error={form.touched.bizAddress && form.errors.bizAddress}
        />

        <Input
          {...form.getFieldProps("bizPhone")}
          type="text"
          label="Phone"
          autoComplete="on"
          required
          error={form.touched.bizPhone && form.errors.bizPhone}
        />
        <Input
          {...form.getFieldProps("bizImage")}
          type="text"
          label="Image"
          autoComplete="on"
          error={form.touched.bizImage && form.errors.bizImage}
        />
        <div className="my-2">
          <button
            type="click"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Create Card
          </button>
        </div>
      </form>
    </>
  );
};

export default CardsCreate;