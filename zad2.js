class Ksiazka {
    constructor(tytul, rokWydania, imieAutora, nazwiskoAutora) {
        this.tytul = tytul;
        this.rokWydania = rokWydania;
        this.imieAutora = imieAutora;
        this.nazwiskoAutora = nazwiskoAutora;
        this.iloscWypozyczen = 0;
    }

    getPelneImieNazwisko() {
        return `${this.imieAutora} ${this.nazwiskoAutora}`;
    }

    zwiekszWypozyczenia() {
        this.iloscWypozyczen++;
    }

    zmniejszWypozyczenia() {
        if (this.iloscWypozyczen > 0) {
            this.iloscWypozyczen--;
        }
    }
}
let listaKsiazek = [
    new Ksiazka('1984', 1949, 'George', 'Orwell'),
    new Ksiazka('Zbrodnia i kara', 1866, 'Fiodor', 'Dostojewski'),
    new Ksiazka('Mistrz i Małgorzata', 1967, 'Michaił', 'Bułhakow'),
    new Ksiazka('Rok 1984', 1949, 'George', 'Orwell')
];

listaKsiazek[0].zwiekszWypozyczenia();
listaKsiazek[0].zwiekszWypozyczenia();
listaKsiazek[1].zwiekszWypozyczenia();
listaKsiazek[2].zwiekszWypozyczenia();
listaKsiazek[2].zwiekszWypozyczenia();
listaKsiazek[2].zwiekszWypozyczenia();

let ksiazkaZNajwiekszaIlosciaWypozyczen = listaKsiazek.reduce((max, ksiazka) => ksiazka.iloscWypozyczen > max.iloscWypozyczen ? ksiazka : max);
console.log(`Książka z największą ilością wypożyczeń: ${ksiazkaZNajwiekszaIlosciaWypozyczen.tytul}, Ilość wypożyczeń: ${ksiazkaZNajwiekszaIlosciaWypozyczen.iloscWypozyczen}`);

let lacznaIloscWypozyczen = listaKsiazek.reduce((suma, ksiazka) => suma + ksiazka.iloscWypozyczen, 0);
console.log(`Łączna ilość wypożyczeń: ${lacznaIloscWypozyczen}`);

const tableBody = document.querySelector('#bookTable tbody');
listaKsiazek.forEach(ksiazka => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${ksiazka.tytul}</td>
        <td>${ksiazka.rokWydania}</td>
        <td>${ksiazka.getPelneImieNazwisko()}</td>
        <td>${ksiazka.iloscWypozyczen}</td>
    `;
    tableBody.appendChild(row);
});
