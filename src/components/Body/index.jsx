import {
    ContainerBody,
    DivSpan,
    DivForm,
    DivInform,
    ContainerForm,
    ContentForm,
    DivInputs,
    DivBotton,
    DivSpanInfo,
    DivStrongLogin,
    Input
} from './styled';

import icon_name from '../../assets/Body/icon-name.svg';
import icon_email from '../../assets/Body/icon-email.svg';
import icon_pass from '../../assets/Body/icon-pass.svg';



function Body () {
    return(
        <ContainerBody>
            <DivSpan>
                <span>
                    A plataforma para você aprender com experts, 
                    dominar as principais tecnologias e entrar mais rápido nas 
                    empresas mais desejadas.
                </span>
            </DivSpan>
            <DivForm>
                <DivInform>
                    <h2>Comece agora grátis</h2>
                    <span>Crie sua conta e make the change.</span>
                </DivInform>
                <ContainerForm>
                    <ContentForm>
                        <DivInputs>
                            <img src={icon_name} alt='icone do nome' />
                            <Input type='text' placeholder='Nome completo' />
                        </DivInputs>
                        <DivInputs>
                            <img src={icon_email} alt='icone de email' />
                            <Input type='text' placeholder='E-mail' />
                        </DivInputs>
                        <DivInputs>
                            <img src={icon_pass} alt='icone de senha' />
                            <Input type='text' placeholder='Password' />
                        </DivInputs>
                        <DivBotton>
                            <button>Criar minha conta</button>
                        </DivBotton>
                    </ContentForm>
                </ContainerForm>
                <DivSpanInfo>
                    Ao clicar em "criar minha conta grátis", 
                    declaro que aceito as Políticas de Privacidade 
                    e os Termos de Uso da DIO.
                </DivSpanInfo>
                <DivStrongLogin>
                    <strong>Já tenho conta.</strong>
                    <strong className='login'>Fazer longin</strong>
                </DivStrongLogin>
            </DivForm>
        </ContainerBody>
    )
}

export default Body;