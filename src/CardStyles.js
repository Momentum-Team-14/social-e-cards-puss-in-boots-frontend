import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const CardStyles = () => {
    const colors = ['White', 'Red', 'Yellow', 'Green', 'Blue', 'Black', 'Pink', 'Purple', 'Orange']
    const borderStyles = ['Solid', 'Dotted', 'Ridge', 'Double', 'Groove']
    const fonts = ['Lobster', 'Papyrus', 'Comic Sans']
    const fontColors = ['Black', 'Red', 'Yellow', 'Green', 'Blue', 'White', 'Pink', 'Purple', 'Orange']
    const textAligns = ['Left Justify', 'Center', 'Right Justify']

    const [color, setColor] = useState(colors[0])
    const [borderStyle, setBorderStyle] = useState(borderStyles[0])
    const [borderColor, setBorderColor] = useState(colors[0])
    const [font, setFont] = useState(fonts[0])
    const [fontColor, setFontColor] = useState(fontColors[0])
    const [textAlign, setTextAlign] = useState(textAligns[0])

    return (
        <div className='style-buttons'>
        <DropdownButton id="dropdown-basic-button" title="Card Color">
            {colors.map(option => <Dropdown.Item onClick={() => setColor(option)}>{option}</Dropdown.Item>)}
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Border Style">
            {borderStyles.map(option => <Dropdown.Item onClick={() => setBorderStyle(option)}>{option}</Dropdown.Item>)}
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Border Color">
            {colors.map(option => <Dropdown.Item onClick={() => setBorderColor(option)}>{option}</Dropdown.Item>)}
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Font">
            {colors.map(option => <Dropdown.Item onClick={() => setFont(option)}>{option}</Dropdown.Item>)}
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Font Color">
            {colors.map(option => <Dropdown.Item onClick={() => setFontColor(option)}>{option}</Dropdown.Item>)}
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Text Alignment">
            {colors.map(option => <Dropdown.Item onClick={() => setTextAlign(option)}>{option}</Dropdown.Item>)}
        </DropdownButton>
        </div>
    );
};

export default CardStyles;
