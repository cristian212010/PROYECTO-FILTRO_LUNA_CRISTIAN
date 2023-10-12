import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Carta({data}){
    const Avatar = localStorage.getItem("avatar");
    const {  attributes,
            listeners,
            setNodeRef,
            transform,
            transition, } = useSortable({ id: data._id });

                const style = {
                  transform: CSS.Transform.toString(transform),
                  transition,
                };
                
                return (
                  
                  <div className="card"
                    style={style}
                    ref={setNodeRef}
                    {...attributes}
                    {...listeners}  
                  >
                    <div className="img"><img src={Avatar} alt="" /></div>
                    <span>Fecha Reporte <hr/>
                    {data.fecha_reporte}</span>
                    <p className="info">
                      Indicador: {data.indicador[0].indicador}
                    </p>
                    <p className="info">
                      Problema: {data.problema}
                    </p>

                    <div className='infoUser'>
                      Reprotado por: <hr/>
                      {data.documentalista[0].nombre} {data.documentalista[0].apellido}
                    </div>
                  </div>
                  )
}

export default Carta