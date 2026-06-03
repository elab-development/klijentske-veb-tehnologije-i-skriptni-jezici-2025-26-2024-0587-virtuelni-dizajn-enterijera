export class Korisnik {
  ime: string;
  email: string;

  constructor(ime: string, email: string) {
    this.ime = ime;
    this.email = email;
  }

  getInitials(): string {
    return this.ime.split(" ").map((r: string) => r[0]).join("").toUpperCase();
  }

  isValid(): boolean {
    return this.email.includes("@") && this.ime.length > 0;
  }

  toString(): string {
    return `${this.ime} <${this.email}>`;
  }
}