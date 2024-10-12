import React from "react";
import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import MyButton from "../mybutton"; // Importo mi componente MyButton
describe("MyButton component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyButton
            text='Prueba'
            txtColor='white'
            bgColor='blue'
            borderColor='green'
            border='3'
            size='large'
            hoverBgColor='orange'
            hoverTxtColor='black'
        />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
})