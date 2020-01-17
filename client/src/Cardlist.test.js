import { render, fireEvent } from '@testing-library/react';
import Cardlist from './Cardlist';
import React from 'react';
const people = [1, 2, 3];

test('Check if component renders correctly', () => {
    render(<Cardlist people={people}/>)
})

test('Check if props are being passed down', () => {
    const page = render(<Cardlist people={people}/>)
    const props = page.getByLabelText("props")
    expect(props.textContent).toBe("true")
})

test('Check if div container is rendered', () => {
    const page = render(<Cardlist people={people}/>)
    page.getByLabelText("container")
})

test('Check if toggle button fires', () => {
    const page = render(<Cardlist people={people}/>)
    const button = page.getByLabelText("button")
    fireEvent.click(button)
})