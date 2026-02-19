import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";

type Props = {};

function ContactForm({}: Props) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Correo</Input>
        <button> Enviar</button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
