import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


    function DropDownMenu() {
    return (
        <div className='style-buttons'>
        <DropdownButton id="dropdown-basic-button" title="Card Color">
        <Dropdown.Item href="#/action-1">White</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Yellow</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Green</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Blue</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Black</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Pink</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Purple</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Orange</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Border Style">
        <Dropdown.Item href="#/action-1">Solid</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Dotted</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Ridge</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Double</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Groove</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Border Color">
        <Dropdown.Item href="#/action-1">White</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Yellow</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Green</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Blue</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Black</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Pink</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Purple</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Orange</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Font">
        <Dropdown.Item href="#/action-1">Lobster</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Papyrus</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Comic Sans</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Font Color">
        <Dropdown.Item href="#/action-1">Black</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Yellow</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Green</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Blue</Dropdown.Item>
        <Dropdown.Item href="#/action-5">White</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Pink</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Purple</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Orange</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Text Alignment">
        <Dropdown.Item href="#/action-1">Left Justify</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Center</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Right Justify</Dropdown.Item>
        </DropdownButton>
        </div>
    );
};
    

export default DropDownMenu;
