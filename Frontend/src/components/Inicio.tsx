import logo from "../assets/logo.webp"
import banner from "../assets/banner.webp"


export default function Inicio() {
    return (
        <section className="bg-(--color-primary) h-screen text-white">
            <div className=" p-4">
                <nav className="flex items-center">
                    <img src={logo} alt="Logo" className="w-28"/>
                    <ul className="flex justify-center items-center gap-24 flex-1">
                        <li className="text-lg hover:bg-(--color-secondary) p-4 rounded-md cursor-pointer transition-all duration-300">Inicio</li>
                        <li className="text-lg hover:bg-(--color-secondary) p-4 rounded-md cursor-pointer transition-all duration-300">Catalogo</li>
                        <li className="text-lg hover:bg-(--color-secondary) p-4 rounded-md cursor-pointer transition-all duration-300">Pedidos</li>
                    </ul>
                </nav>
            </div>
            <div className="mt-40 flex w-auto gap-80">
                <div className="w- ml-36">
                    <img src={banner} alt="Banner" className="w-xl rounded-(--radius-primary)" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Juana Bake</h1>
                </div>
                

            </div>
        </section>
    )
}
