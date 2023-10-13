import Button from "../components/Button"

const NotFound = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col pt-0 justify-center min-h-screen p-8 gap-10 max-container">
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py40 bg-primary bg-hero bg-cover bg-center">
      <img
        src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
        alt="mechanic"
        width={650}
        className="object-contain relative z-10"
      />
    </div>
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
      <h1 className="mt-10 text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span className="relative z-10 pr-10 font-mono">Page Not Found!</span>
        <br />
        <br/>
      </h1>
      <Button label="Return Home" destination="/home"/>
    </div>
  </section>
  )
}

export default NotFound