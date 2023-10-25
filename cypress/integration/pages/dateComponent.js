class DateComponent {
    static getTodaysDate() {
        const today = new Date().toISOString().slice(0, 10);
        return today;
    }

    static getTomorrowsDate() {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        return date.toISOString().slice(0, 10);
    }
}

export { DateComponent };