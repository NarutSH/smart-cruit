import * as yup from "yup";

const expObject = yup.object().shape({
  position: yup.string().required("กรุณาระบุ"),
  hirerName: yup.string().required("กรุณาระบุ"),
  startDate: yup.date().required("กรุณาระบุ"),
  endDate: yup.date().required("กรุณาระบุ"),
  remark: yup.string(),
  location: yup.string(),
});
const eduObject = yup.object().shape({
  schoolName: yup.string().required("กรุณาระบุ"),
  degree: yup.string().required("กรุณาระบุ"),
  graduatedDate: yup.date().required("กรุณาระบุ"),
  remark: yup.string(),
  location: yup.string(),
});
const skillObject = yup.object().shape({
  skillName: yup.string().required("กรุณาระบุ"),
  skillLevel: yup.string().required("กรุณาระบุ"),
});
const languageObject = yup.object().shape({
  languageName: yup.string().required("กรุณาระบุ"),
  languageLevel: yup.string().required("กรุณาระบุ"),
});

const internshipObject = yup.object().shape({
  position: yup.string().required("กรุณาระบุ"),
  hirerName: yup.string().required("กรุณาระบุ"),
  startDate: yup.date().required("กรุณาระบุ"),
  endDate: yup.date().required("กรุณาระบุ"),
  remark: yup.string(),
  location: yup.string(),
});

const referenceObject = yup.object().shape({
  fullname: yup.string().required("กรุณาระบุ"),
  company: yup.string().required("กรุณาระบุ"),
  tel: yup.number().typeError("ระบุตัวเลขเท่านั้น"),
  email: yup.string().email().required("กรุณาระบุ"),
});

export const contactSchema = yup.object({
  contact: yup.object({
    firstName: yup.string().required("กรุณาระบุ"),
    lastName: yup.string().required("กรุณาระบุ"),
    tel: yup.number().typeError("ระบุตัวเลขเท่านั้น").required("กรุณาระบุ"),
    email: yup.string().email().required("กรุณาระบุ"),
    address: yup.object({
      address: yup.string().required("กรุณาระบุ"),
      subDistrict: yup.string().required("กรุณาระบุ"),
      district: yup.string().required("กรุณาระบุ"),
      province: yup.string().required("กรุณาระบุ"),
      postCode: yup
        .number()
        .typeError("ระบุตัวเลขเท่านั้น")
        .required("กรุณาระบุ"),
    }),
  }),
});

export const experiancesSchema = yup.object({
  experiences: yup.array().of(expObject),
});
export const educationSchema = yup.object({
  education: yup.array().of(eduObject),
});
export const skillSchema = yup.object({
  skill: yup.array().of(skillObject),
});
export const aboutSchema = yup.object({
  about: yup.object().shape({
    about: yup.string(),
  }),
});

export const languageSchema = yup.object({
  language: yup.array().of(languageObject),
});

export const internshipSchema = yup.object({
  experiences: yup.array().of(internshipObject),
});
export const referenceSchema = yup.object({
  reference: yup.array().of(referenceObject),
});

export const schema = yup.object({
  contact: yup.object({
    profileImg: yup.string(),
    firstName: yup.string().required("กรุณาระบุ"),
    lastName: yup.string().required("กรุณาระบุ"),
    tel: yup.number().typeError("ระบุตัวเลขเท่านั้น").required("กรุณาระบุ"),
    email: yup.string().email().required("กรุณาระบุ"),
    address: yup.object({
      address: yup.string().required("กรุณาระบุ"),
      subDistrict: yup.string().required("กรุณาระบุ"),
      district: yup.string().required("กรุณาระบุ"),
      province: yup.string().required("กรุณาระบุ"),
      postCode: yup
        .number()
        .typeError("ระบุตัวเลขเท่านั้น")
        .required("กรุณาระบุ"),
    }),
  }),
  experiences: yup.array().of(expObject),
  education: yup.array().of(eduObject),
  skill: yup.array().of(skillObject),
  about: yup.object().shape({
    about: yup.string(),
  }),
});
