import styled from "styled-components";


export const ContainerBody = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
`
export const DivSpan = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 8.8rem;
    margin-left: 6.5rem;
    width: 38.8rem;
    height: 30.8rem;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4.4rem;

    color: #FFFFFF;
`
export const DivForm = styled.div`
    
    display: flex;
    flex-direction: column;
    
    margin-top: 10rem;
    margin-left: 29.7rem;
`
export const DivInform = styled.div`
        color: #FFFFFF;
        margin-bottom: 3.5rem;
    h2{     
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;

        margin-bottom: 0.8rem;
    }
    span{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`
export const ContainerForm = styled.form`

`
export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.8rem;
`
export const DivInputs = styled.div`
    display: flex;
    align-content: center;
    
    gap: 0.8rem;
    border-bottom: 1px solid #3B3450;
    width: 27.5rem;

    img{
        margin-bottom: 1.1rem;
    }

    input{
        height: 2.5rem;
        border: none;
        border-style: none;
        background-color: #1E192C;
        outline: none;
        color: #FFFFFF
    }
    ::placeholder {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        
        color: #FFFFFF;
    }
`

export const DivBotton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28rem;
    height: 4.1rem;

    border: 1px solid #E4105D;
    border-radius: 2.7rem;

    margin-top: calc(3.9rem - 1.8rem);
    margin-bottom: 2.7rem;
    button{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 26.4rem;
        height: 2.9rem;

        background: #E4105D;
        border-radius: 2.7rem;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.5rem;
        display: flex;
        align-items: center;
        text-align: center;
    
        color: #FFFFFF;

        cursor: pointer;
    }
    &:hover button{
        opacity: 0.8;
    }
`
export const DivSpanInfo = styled.span`
    width: 37.2rem;
    height: 8.5rem;
   
`
export const DivStrongLogin = styled.div`
    display: flex;
    align-items: center;

    gap: 0.7rem;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.9rem;

    color: #FFFFFF;

    .login{
        color: rgba(35, 221, 122, 1);
        cursor: pointer;
    }
`


export const Input = styled.input`

    &::placeholder{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        color: #FFFFFF;
    }
`