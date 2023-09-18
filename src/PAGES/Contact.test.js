import Contact from "./Contact";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//teste, ob die Form erfolgreich gerendert wird
test("renders component correctly", () => {
  render(<Contact />);

  const firstNameInput = screen.getByPlaceholderText("vorname");
  expect(firstNameInput).toBeInTheDocument();

  const lastNameInput = screen.getByPlaceholderText("nachname");
  expect(lastNameInput).toBeInTheDocument();

  const adressInput = screen.getByPlaceholderText("adresse und hausnummer");
  expect(adressInput).toBeInTheDocument();

  const postleitzahlInput = screen.getByPlaceholderText("postleitzahl");
  expect(postleitzahlInput).toBeInTheDocument();

  const telefonInput = screen.getByPlaceholderText("telefon");
  expect(telefonInput).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText("email");
  expect(emailInput).toBeInTheDocument();

  const birthInput = screen.getByPlaceholderText(
    "errechneter Entbindungstermin"
  );
  expect(birthInput).toBeInTheDocument();

  const insuranceInput = screen.getByPlaceholderText("krankenkasse");
  expect(insuranceInput).toBeInTheDocument();

  const textAreaInput = screen.getByPlaceholderText(
    "schreibe mir gern weitere anliegen / fragen"
  );
  expect(textAreaInput).toBeInTheDocument();

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("button is disabled initially", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});

test("button is enabled when all input fields are filled in", () => {
  render(<Contact />);

  const firstNameInput = screen.getByPlaceholderText("vorname");
  const lastNameInput = screen.getByPlaceholderText("nachname");
  const adressInput = screen.getByPlaceholderText("adresse und hausnummer");
  const postleitzahlInput = screen.getByPlaceholderText("postleitzahl");
  const telefonInput = screen.getByPlaceholderText("telefon");
  const emailInput = screen.getByPlaceholderText("email");
  const birthInput = screen.getByPlaceholderText(
    "errechneter Entbindungstermin"
  );
  const insuranceInput = screen.getByPlaceholderText("krankenkasse");
  const textAreaInput = screen.getByPlaceholderText(
    "schreibe mir gern weitere anliegen / fragen"
  );
  const checkbox = screen.getByRole("checkbox");

  fireEvent.change(firstNameInput, { target: { value: "Anne" } });
  fireEvent.change(lastNameInput, { target: { value: "Wagner" } });
  fireEvent.change(adressInput, { target: { value: "some street" } });
  fireEvent.change(postleitzahlInput, { target: { value: "12345" } });
  fireEvent.change(telefonInput, { target: { value: "123456789" } });
  fireEvent.change(emailInput, { target: { value: "a@gmx.de" } });
  fireEvent.change(birthInput, { target: { value: "2023-12-12" } }); //
  fireEvent.change(insuranceInput, { target: { value: "insurance" } });
  fireEvent.change(textAreaInput, { target: { value: "some text" } });
  //screen.debug();  = <p> bitte fülle alle felder  aus....</p>
  fireEvent.click(checkbox);

  const button = screen.getByRole("button");

  expect(button).toBeEnabled();
  //screen.debug(); ≠ p> bitte fülle alle felder  aus....</p>
});

/*teste, ob die Eingaben in die Formularfelder korrekt funktioniert 
//und die eingegebenen Daten im State gespeichert werden


// teste, ob die Formvalidierung funktioniert
test('form validation', () =>{

})

// teste, ob die Daten beim Absenden richtig weitergeleitet wurden
test('form submission', async () =>{
 


})

// teste, ob die Daten erfolgreich an die Email weitergeleitet wurden
test('email forwarding', () =>{

})

//teste, ob das Zurücksetzen der Form nach dem Absenden korrekt funktioniert
test('form input', () =>{

})*/
