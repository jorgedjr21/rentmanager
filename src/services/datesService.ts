const datesService = {
  monthName(): string {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Mail', 'Junho', 'Julho', 'Agosto', 'Setempro', 'Outubro', 'Novembro', 'Dezembro'];
    const currentMonth = new Date().getMonth();

    return months[currentMonth]
  },
  daysToPayment(): number {
    const today = new Date();
    const paymentDate = new Date("06/28/2020");

    return Math.round((paymentDate.getTime() - today.getTime()) / ((1000 * 3600 * 24)));
  }
}

export default datesService;