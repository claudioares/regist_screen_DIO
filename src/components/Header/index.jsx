import {
    ContainerHeader,
    DivImage,
    DivInfor
} from './styled';
import logo from '../../assets/header/logo.svg';


function Header () {
    return(
        <ContainerHeader>
            <DivImage>
                <img src={logo} alt="Logo tipo da DIO" />
            </DivImage>
            <DivInfor>
                <ul>
                    <li>Home</li>
                    <li className='button'>Entrar</li>
                    <li className='button'>Cadastrar</li>
                </ul>
            </DivInfor>
        </ContainerHeader>
    )
}

export default Header;