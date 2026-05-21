const now = new Date();
const getYear = now.getFullYear();
const getMonth = now.getMonth();

const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
];

const dayNames = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato'
];

// Scriviamo il nome del mese
const printCurrentMonth = () => {
    const title = document.querySelector('h1');
    const currentMonth = monthNames[getMonth];
    title.textContent = currentMonth;
}

printCurrentMonth();

const dayInMonth = () => {
    const lastDay = new Date(getYear, getMonth + 1, 0);
    // Perchè il giorno zero, del mese +1 all'attuale (giugno) è l'ultimo di maggio
    const numberOfDays = lastDay.getDate();
    return numberOfDays;
    // ora so quanti giorni ha il mese attuale
};

dayInMonth();