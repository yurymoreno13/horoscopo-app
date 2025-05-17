export class HoroscopeModel {
  getHoroscopeByDate(dateStr) {
    const [day, month, year] = dateStr.split("-").map(Number);

    const signos = [
      { signo: "Aries", emoji: "♈", inicio: [21, 3], fin: [19, 4] },
      { signo: "Tauro", emoji: "♉", inicio: [20, 4], fin: [20, 5] },
      { signo: "Géminis", emoji: "♊", inicio: [21, 5], fin: [20, 6] },
      { signo: "Cáncer", emoji: "♋", inicio: [21, 6], fin: [22, 7] },
      { signo: "Leo", emoji: "♌", inicio: [23, 7], fin: [22, 8] },
      { signo: "Virgo", emoji: "♍", inicio: [23, 8], fin: [22, 9] },
      { signo: "Libra", emoji: "♎", inicio: [23, 9], fin: [22, 10] },
      { signo: "Escorpio", emoji: "♏", inicio: [23, 10], fin: [21, 11] },
      { signo: "Sagitario", emoji: "♐", inicio: [22, 11], fin: [21, 12] },
      { signo: "Capricornio", emoji: "♑", inicio: [22, 12], fin: [19, 1] },
      { signo: "Acuario", emoji: "♒", inicio: [20, 1], fin: [18, 2] },
      { signo: "Piscis", emoji: "♓", inicio: [19, 2], fin: [20, 3] },
    ];

    const horoscopo = signos.find(({ inicio, fin }) => {
      const fecha = [day, month];
      return (
        (fecha[1] === inicio[1] && fecha[0] >= inicio[0]) ||
        (fecha[1] === fin[1] && fecha[0] <= fin[0])
      );
    });

    if (!horoscopo) return "Fecha inválida";

    return `Tu signo es ${horoscopo.signo} ${horoscopo.emoji}. Hoy es un gran día para ti 🌟.`;
  }
}
