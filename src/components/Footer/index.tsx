import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Image from 'next/image';
import logo from '../../../public/logo.jpg';

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-8 font-serif">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between items-center">
                    <div className="ml-4"> 
                        <Image src={logo} alt="Logo Morais & Ribeiro" width={300} height={100} />
                    </div>
                    <div className="hidden md:block w-8"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto">
                        <div className="text-center font-Alegreya">
                            <h2 className="mb-4 text-2xl font-medium text-white dark:text-white">São José dos Campos - SP</h2>
                            <ul className="text-white-500 dark:text-gray-400 font-medium leading-relaxed">
                                <li>
                                    <p className="text-sm">R. Antônio Aleixo da Silva, 1880 -</p>
                                    <p className="text-sm">Jardim Satélite, São José dos Campos</p>
                                    <p className="text-sm">SP, 12231-650</p>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="mb-4 text-2xl font-medium">Atendimento</h2>
                            <ul className="text-white-500">
                                <li>
                                    <p className="text-base">De Segunda a Sexta das 09:00 às 12:00 e</p>
                                    <p className="text-base">das 13:30 às 18:00</p>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <ul className="text-white-500">
                                <li className="flex flex-col justify-center items-center">
                                    <div className="flex items-center m-2">
                                        <MailOutlineIcon/>
                                        <p className="text-base ml-2"><strong>E-mail:</strong> moraiseribeiroadvju@gmail.com</p>
                                    </div>
                                    <div className="flex items-center m-2">
                                        <CallOutlinedIcon/>
                                        <p className="text-base ml-2"><strong>Telefone:</strong> (12)99160-4267</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center"> 
                    <span className="text-sm text-white sm:text-center dark:text-white">Morais & Ribeiro 2024  |  Todos os direitos reservados.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
