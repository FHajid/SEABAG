export default function Footer () {
    return (
        <footer className="bg-gray-100 p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-700 text-center md:text-left mb-2 md:mb-0">
                    Your Text Here
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src="path/to/your/logo.png" alt="Logo" className="h-10" />
                </div>
            </div>
        </footer>
    )}