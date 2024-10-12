import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
    title: "MyButton",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

// Creamos dos ejemplos de MyButton
export const Primary: Story = {
    args: {
        text: "Button primary",
        txtColor: 'black',
        bgColor: 'orange',
        borderColor: 'green',
        border: '3',
        size: 'large',
        hoverBgColor: 'blue',
        hoverTxtColor: 'white',
        disabled: false,
        onClick: () => alert("Button Primary"),
    },
};

export const Secondary: Story = {
    args: {
        text: "Button secondary",
        txtColor: 'black',
        bgColor: 'yellow',
        borderColor: 'red',
        border: '1',
        size: 'small',
        hoverBgColor: 'green',
        hoverTxtColor: 'pink',
        disabled: false,
        onClick: () => alert("Button secondary"),
    },
};