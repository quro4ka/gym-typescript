import Logo from "@/assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            pariatur tempore vero ipsum facere aliquid fuga cum doloremque
            expedita sint.
          </p>
          <p>@ Copyright</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa dldsa pqd</p>
          <p className="my-5">Уе dldsada pqdkjhk</p>
          <p className="my-5">Ulamma cupper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Alxlovdsdldsa pqd</p>
          <p className="my-5">(111)321-2343</p>
        </div>
      </div>
    </footer>
  );
};
