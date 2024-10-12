import React from "react";
import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import DanielVS from "../danielvs"; // Importo mi componente DanielVS
describe("DanielVS component", () => {
    it("El rating se debería renderizar correctamente", () => {
        render(<DanielVS
            defaultValue={2}
            precision={1}
            max={5}
            readOnly={false}
            size='medium'
            color='orange'
            disabled={false}
        />);
        const rating = screen.getAllByRole("radio"); // Cogemos cada radio del Rating
        rating.forEach((radio) => { // Realizamos un for que recorra el array de rating
            expect(radio).toBeInTheDocument(); // Comprobamos que esté en el documento
        });
    });
})