import styled from "styled-components";
export const StyledModalDiv = styled.div`
    background-color: #FFFF;
    width: 470px;
    height: fit-content;
    border-radius: 6px;
    font-family: var(--font-family-1);
    position: relative;
    margin: 20px;

    >button:first-child{
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        height: 30px;
        
        border: solid 1px var(--primary100);
        background-color: var(--primary200);
        color: var(--primary100);
        border-radius: 6px;

        font-size: 16px;
        font-weight: 600;
    }

    >section{
        margin: 30px auto 64px;
        width: 90%;

        padding: 10px;
    }

    >section>h2{
        text-align: center;
        line-height: 40px;
        font-size: 26px;
        margin-bottom: 16px;
    }
    
    >section>p{
        font-family: var(--font-family-2);
    }

    >section>p>span{
        font-family: var(--font-family-2);
    }

    >footer{
        display:flex;
        align-items: center;
        justify-content:center;

        background-color: var(--primary100);
        height:50px;
        border-radius: 0px 0px 6px 6px;     
    }

    >footer>button{
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: var(--white100);
        font-family: var(--font-family-1);

        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
    }
`
export const StyledModalBackgroud = styled.div`
    background-color: RGBA( 0, 0, 0, 0.4 );
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
`