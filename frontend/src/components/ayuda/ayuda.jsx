import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
import Navbar from '../navbar/navbar'
import "../../assets/styles/ayuda.css"
const preguntas_frecuentes = [
    {
      "pregunta": "¿Cómo puedo acceder a su sitio web?",
      "respuesta": "Puedes acceder a nuestro sitio web escribiendo la URL en la barra de direcciones de tu navegador o haciendo clic en el enlace proporcionado en nuestros correos electrónicos o redes sociales."
    },
    {
      "pregunta": "¿Qué información puedo encontrar en su sitio web?",
      "respuesta": "En nuestro sitio web, puedes encontrar información sobre nuestros productos/servicios, precios, noticias, contacto y mucho más. También puedes acceder a recursos como guías y tutoriales."
    },
    {
      "pregunta": "¿Cómo puedo ponerme en contacto con su equipo de soporte?",
      "respuesta": "Para ponerse en contacto con nuestro equipo de soporte, puedes encontrar un enlace de 'Contacto' en la parte superior o inferior de nuestro sitio web. También proporcionamos números de teléfono y direcciones de correo electrónico para obtener asistencia."
    },
    {
      "pregunta": "¿Cómo restablezco mi contraseña en su sitio web?",
      "respuesta": "Para restablecer tu contraseña, ve a la página de inicio de sesión y busca el enlace '¿Olvidaste tu contraseña?'. Sigue las instrucciones para restablecerla a través de tu correo electrónico registrado."
    },
    {
      "pregunta": "¿Cómo puedo actualizar mi información de perfil en el sitio web?",
      "respuesta": "Inicia sesión en tu cuenta, ve a tu perfil y busca la opción 'Editar perfil' o una funcionalidad similar. Desde allí, podrás actualizar la información de tu perfil, como tu dirección de correo electrónico, contraseña, dirección, etc."
    },
    {
      "pregunta": "¿Qué navegadores son compatibles con su sitio web?",
      "respuesta": "Nuestro sitio web es compatible con la mayoría de los navegadores web populares, como Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, y otros. Asegúrate de utilizar una versión actualizada de tu navegador para obtener la mejor experiencia."
    }
  ]


const RenderAcordion = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Accordion allowToggle className='acordeon'>
            {
                preguntas_frecuentes.map((data)=>{
                    return(
                    <AccordionItem className='acordion_contenido'>
                        <h2>
                        <AccordionButton className='acordion_boton' _expanded={{ bg: 'tomato', color: 'white'}}>
                            <Box as="span" flex='1' textAlign='left'>
                            {data.pregunta}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        {data.respuesta}
                        </AccordionPanel>
                    </AccordionItem>
                    )
                })
            }


        </Accordion>
        </div>
    )
}

export default RenderAcordion