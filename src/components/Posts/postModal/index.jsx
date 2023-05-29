import { useContext } from "react";
import { DashContext } from "../../../context/DashContext";
import { StyledModalBackgroud, StyledModalDiv } from "./style";

const Modal = () =>{
    const { setModal, deletePost } = useContext(DashContext);
    return(
        <StyledModalBackgroud>
            <StyledModalDiv>
                <button onClick={()=>{setModal(false)}}>X</button>
                <section>
                    <h2>TEM CERTEZA ?</h2>
                    <p>Depois dessa ação, você perderá seu post para sempre <span>:/ (é muito tempo)</span></p>
                </section>
                <footer>
                    <button onClick={()=>{deletePost()}}>Deletar</button>
                </footer>
            </StyledModalDiv>
        </StyledModalBackgroud>
    )
}
export default Modal;