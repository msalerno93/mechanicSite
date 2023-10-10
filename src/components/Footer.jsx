import Logo from '../assets/Logo.png'
const Footer = () => {
  return (
    
<footer className="bg-white rounded-lg shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <img src={Logo} className="h-8 mr-3" width={250} alt="Flowbite Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 font-bold hover:text-blue-500 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 font-bold hover:text-blue-500 md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 font-bold hover:text-blue-500 md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="font-bold hover:text-blue-500">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:text-blue-500">LI Prestige Automotive Group™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer