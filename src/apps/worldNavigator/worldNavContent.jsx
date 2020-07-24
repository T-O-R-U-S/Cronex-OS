import React from 'react';
import UiKitButton from '../../systemUIKit/UIkit.jsx';
import Window from '../../desktopEnvironment/window/window';
import ReactDOM from 'react-dom';

import ScribblePad from '../scribblePad/scribblePad.jsx';
var icon = require('../../systemUIKit/images/icons/scribbleBoard.png');


function openScribble(){
    ReactDOM.hydrate(
        <Window title="scribPad.COE" content={<ScribblePad/>} />,
        document.getElementById('root')
    )
}

function WorldNavigationMenu() {
    return(
        <div>
        <UiKitButton function={openScribble} src={icon}/>
        <UiKitButton />
        <UiKitButton />
        </div>
    )
}

export default WorldNavigationMenu;