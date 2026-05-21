const now = new Date();
const getYear = now.getFullYear();
const getMonth = now.getMonth();
const appointments = []; // conterrà gli appuntamenti già inseriti

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

// Creiamo la griglia

const createDays = (daysNumber) => {
    const calendarDiv = document.querySelector('#calendar');
    for (let i = 1; i <= daysNumber; i++) {
        const dayCellDiv = document.createElement('div');
        dayCellDiv.classList.add('day');
        // Le celle dovranno esssere cliccabili
        dayCellDiv.addEventListener('click', function () {
            unselectAllDays(); // deselezionare il giorno selezionato prima
            dayCellDiv.classList.add('selected');
            changeMeetingDay(i);
            if (appointments[i] && appointments[i].length > 0) {
                showAppointments(i);
            } else {
                const appointmentsDiv = document.querySelector('appointments');
                appointmentsDiv.style.display = 'none';
            }

        })

        // Creiamo il  giorno
        const cellValue = document.createElement('h3');
        const thisDate = i;
        // Evidenziamo il giorno corrente
        if (thisDate === now.getDate()) {
            dayCellDiv.classList.add('currentDay');
        }

        // Scriviamo le domeniche in rosso
        let thisDay = new Date(getYear, getMonth, thisDate);
        if (thisDay.getDay() === 0) {
            cellValue.classList.add('sunday');
        }

        // Scriviamo il nome del giorno
        let dayNumber = thisDay.getDay();
        let dayName = dayNames[dayNumber];
        cellValue.textContent = `${dayName} ${i}`;
        dayCellDiv.appendChild(cellValue);
        calendarDiv.appendChild(dayCellDiv);
    }
};

createDays(dayInMonth());

function unselectAllDays() {
    const previousSelected = document.querySelector('.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
}

function changeMeetingDay(i) {
    const newMeetingDay = document.querySelector('#newMeetingDay');
    newMeetingDay.textContent = i;
    newMeetingDay.classList.add('daySelected');
}