'use client'
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {useTranslations} from "next-intl";

interface FormData {
   name: string;
   email: string;
   phone: number;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      phone: yup.number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Phone number is required')
         .required('Phone must be a number'),
      message: yup.string().required().label("Message"),
   })
   .required();

function BecomeVolunteerForm() {
   const t = useTranslations("Home.becomeVolunteer")
   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Message sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (

      <form onSubmit={handleSubmit(onSubmit)} className="volunteer-form">
         <div className="row">
            <div className="col-xl-9 mb-10">
               <p>{t("description")}</p>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="name">{t("form.name")}</label>
                  <input type="text" id="name"  {...register("name")} className="form-control" placeholder={t("form.name")} />
                  <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="email">{t("form.email")}</label>
                  <input type="email" id="email" {...register("email")} className="form-control" placeholder="Email Address" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="phone_number">{t("form.phone")}</label>
                  <input type="text" id="phone_number"  {...register("phone")} className="form-control" placeholder={t("form.phone")} />
                  <p className="form_error">{errors.phone?.message}</p>
               </div>
            </div>
            <div className="col-sm-6">
               <div className="form-group">
                  <label htmlFor="birth-day">{t("form.date")}</label>
                  <input type="date" id="birth-day" name="birth-day" className="form-control" />
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" {...register("message")} className="form-control" rows={3} placeholder={t("form.message")}></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-md-12">
               <div className="form-group pt-10 mb-0">
                  <button type="submit" className="cr-btn ml-5">{t("form.link")}</button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default BecomeVolunteerForm
