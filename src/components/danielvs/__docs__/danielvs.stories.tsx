import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example

const meta: Meta<typeof Example> = {
    title: "DanielVS",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
    args: {
        defaultValue: 2,
        max: 6,
        size: "large",
        precision: 1,
        color: "orange",
        readOnly: false,
        disabled: false,
    },
};

export const Secondary: Story = {
    args: {
        defaultValue: 4,
        max: 10,
        size: "small",
        precision: 0.5,
        color: "red",
        readOnly: false,
        disabled: false,
    },
};