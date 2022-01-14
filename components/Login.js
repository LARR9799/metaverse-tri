import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative text-white">
            <h1>Login</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-cente space-y-4">
                <Image 
                    className="object-cover rounded-full"
                    src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1456354720/content-items/001/552/271/Logo-original.jpg?1456354720" 
                    width={200} 
                    height={200} 
                />

                <button 
                    onClick={authenticate} 
                    className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
                >
                    Login to the METAVERSE
                </button>
            </div>

            <div className="w-full h-screen">
                {/* <Image src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1456354720/content-items/001/552/271/Logo-original.jpg?1456354720" layout="fill" objectFit="cover"/> */}
                <Image 
                    src="https://img.freepik.com/vector-gratis/fondo-banner-abstracto-formas-rojas_1361-3348.jpg?size=626&ext=jpg" 
                    layout="fill" 
                    objectFit="cover"
                />
            </div>
        </div>
    );
}

export default Login;
