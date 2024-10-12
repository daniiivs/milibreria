import React from "react";
import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import MyFavoriteBorder from "../myfavoriteborder"; // Importo mi componente MyFavoriteBorder
describe("MyFavoriteBorder component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyFavoriteBorder
            color='red'
            disabled={false}
        />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
})