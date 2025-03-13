import { createContext, useContext, useState, ReactNode } from "react";

type FormDataType = {
  fullName: string;
  email: string;
  phoneNumber: string;
  age: string;
  favoriteLanguage: string;
};

type FormContextType = {
  formData: FormDataType | null;
  setFormData: (data: FormDataType) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormDataType | null>(null);
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
