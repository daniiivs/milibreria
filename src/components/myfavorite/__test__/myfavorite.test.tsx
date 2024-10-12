import React from "react";
import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import MyFavorite from "../myfavorite"; // Importo mi componente MyFavorite
describe("MyFavorite component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyFavorite
            color='red'
            disabled={false}
        />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
})