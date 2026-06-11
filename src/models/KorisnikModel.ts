export class KorisnikInfo {
  ime: string;
  email: string;

  constructor(ime: string, email: string) {
    this.ime = ime;
    this.email = email;
  }

  toString(): string {
    return `${this.ime} <${this.email}>`;
  }
}

export class Korisnik {
  info: KorisnikInfo;

  constructor(ime: string, email: string){
    this.info = new KorisnikInfo(ime, email);
  }

getInitials(): string {
    return this.info.ime.split(" ").map((r: string) => r[0]).join("").toUpperCase();
  }

  isValid(): boolean {
    return this.info.email.includes("@") && this.info.ime.length > 0;
  }
  toString(): string {
    return this.info.toString();
  }
}
