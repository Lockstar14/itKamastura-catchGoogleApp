import { getGooglePoints,getPlayerPoints } from "../../../core/state-manager.js";
export function SettingsComponent(){
    const element = document.createElement('div');
 render(element)
    
    return {element}; 
}

async function render(element){
    element.append('seetings will be here')
}