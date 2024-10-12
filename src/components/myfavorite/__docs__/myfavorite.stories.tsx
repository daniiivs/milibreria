import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
    title: "MyFavorite",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

// Creamos dos ejemplos de MyFavorite
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