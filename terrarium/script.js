// select the draggable elements and pass into dragElement function
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
    let pos1 = 0, 
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        // console.log(e);

        // initial position of mouse when clicked on element
        pos3 = e.clientX;
        pos4 = e.clientY;

        console.log('Initial Mouse (X,Y): ', pos3, pos4);
        console.log('Initial Offset (X,Y): ', terrariumElement.offsetLeft, terrariumElement.offsetTop);

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        // current position of mouse when element is being dragged 
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;
        pos4 = e.clientY;

        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {

        console.log('Final Mouse (X,Y): ', pos3, pos4);
        console.log('Final Offset (X,Y): ', terrariumElement.offsetLeft, terrariumElement.offsetTop);
        console.log('Displacement (initial - final) (X,Y): ', pos1, pos2);
        console.log('Left, Top: ', terrariumElement.style.top, terrariumElement.style.left);

        document.onpointerup = null;
        document.onpointermove = null;
    }
}