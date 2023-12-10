import Image from "next/image";
import Logo from "../../public/Logo.svg";
import { FormRegistrationComponent } from "../FormRegistrationComponent";

export const BoxMainComponent = () => {
  return (
    <>
      <div>
        <Image src={Logo} alt="Logo" />
        <p>read journey</p>
      </div>
      <h1>Expand your mind, reading a book</h1>
      <FormRegistrationComponent />
    </>
  );
};
