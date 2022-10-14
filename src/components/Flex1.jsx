import { CardA } from "./CardA"

export const Flex1 = ({productos})=>{
    return(
        <div className="flex1">
            {
                productos.map(element=>{
                  return(
                  <CardA stockProductos={element.id}/>
                  )
                })
            }  
        </div>
    )
}