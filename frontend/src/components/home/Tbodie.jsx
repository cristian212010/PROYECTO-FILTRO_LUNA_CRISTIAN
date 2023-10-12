import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import * as GiIcons from 'react-icons/gi'

function Tbodie({data}){
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
                    <tbody
                    style={style}
                    ref={setNodeRef}
                    {...attributes}
                    {...listeners} >
                    <tr className='filas'>
                      <td>{data.indicador}</td>
                      <td className="descripcion">{data.descripcion}</td>
                      <td>{data.categoria}</td>
                      <td>{data.fecha_inicio}</td>
                      <td>{data.fecha_fin}</td>
                      <td>{data.formula}</td>
                      <td>{data.frecuencia}</td>
                      <td> <CircularProgress value={data.cumplimiento} color={data.cumplimiento < 50 ? "red" : (data.cumplimiento >= 50 && data.cumplimiento <= 75) ? "orange" : "green"}><CircularProgressLabel><p className='porcentaje'><strong>{data.cumplimiento}%</strong></p></CircularProgressLabel> </CircularProgress></td>
                      <td>{data.area[0].nombre}</td>
                      <div className='icon'>
                        <GiIcons.GiHamburgerMenu></GiIcons.GiHamburgerMenu>
                      </div>
                    </tr>
                    <tr className="spacer">
                      <td colspan="100"></td>
                    </tr>
                  </tbody>
                
                  )
}

export default Tbodie