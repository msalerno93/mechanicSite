import Button from "../components/Button";
const AboutUs = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col pt-0 justify-center min-h-screen p-8 gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
        <h1 className="mt-10 text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10 font-mono">
            Heres a little bit about our company!
          </span>
          <br />
        </h1>
        <p className="font-serif font-family:Georgia text-lg leading-6 mt-6 mb-14 pr-2 m-2 sm:max-w-sm">
          Welcome to LI Prestige Automotive, your trusted partner in automotive care since
          1998. With over two decades of experience, we have been delivering
          top-notch car maintenance and engine repair services to our valued
          customers. Our expert mechanics are committed to keeping your vehicle
          running smoothly and efficiently, ensuring your peace of mind on the
          road. Choose us for quality service and a legacy of automotive
          excellence.
        </p>
        <Button label="Contact Us Today!" destination="/contactus" />
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py40 bg-primary bg-hero bg-cover bg-center">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNb2Xv-hLzyRAasdhe-LqI7xwRsRJFbMxTSZb1s=s1360-w1360-h1020"
          alt="mechanic"
          width={700}
          height={700}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default AboutUs;
