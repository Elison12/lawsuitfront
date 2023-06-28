import React from "react";
import { ProcessoModel} from "./style";
import bgImg from "../../assets/img/uefa.png";



const Processo = ({data}) => {
    return(
        <ProcessoModel backgroundImg={bgImg}>
      //   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      //     <h1>
      //       3º
      //     </h1>
      //     <div>
      //       <h2 style={{ color: 'white' }}>
      //         {data.titulo}
      //       </h2>
      //     </div>
      //   </div>
      // </ProcessoModel>
    )
}

export default Processo;