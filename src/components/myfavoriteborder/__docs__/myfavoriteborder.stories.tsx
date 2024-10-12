import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
    title: "MyFavoriteBorder",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

// Creamos dos ejemplos de MyFavoriteBorder
export const Primary: Story = {
    args: {
        color: 'red',
        disabled: false,
        onClick: () => alert("Icon Primary"),
    },
};

export const Secondary: Story = {
    args: {
        color: 'pink',
        disabled: false,
        onClick: () => alert("Icon Secondary"),
    },
};