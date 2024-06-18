import { getGooglePosition } from "../../../../core/state-manager.js"
import { GoogleComponent } from "../../common/Google/Google.component.js"

export function CellComponent(x,y){
    const element = document.createElement('td')
render(element,x,y)
  return {element}
}

async function render(element, x,y) {
    const googlePosition= await getGooglePosition()
    if(getGooglePosition.x === x && getGooglePosition.y === y){
        element.append(GoogleComponent().element)
    }
   
}