export const getTime = (date: number): string => {
    if (!date) return new Date().toLocaleDateString();
    const min = Math.floor(
      (+Date.now() - date) / 1000 / 60
    );
  
    if (min < 60) {
      const remainder = min % 10;
      if (remainder < 1) return 'сейчас';
      if (remainder === 1 && min !== 11) return min + ' минуту назад';
      if (remainder > 1 && remainder < 5) return min + ' минуты назад';
      return min + ' минут назад'
    }
  
    if (min >= 60 && min < 60 * 24) {
      const hour = Math.floor(min / 60);
      const remainder = hour % 10;
      if (remainder === 1 && hour !== 11) return hour + ' час назад';
      if (remainder > 1 && remainder < 5) return hour + ' часа назад';
      return hour + ' часов назад'
    }  
  
    if (min / 60 / 24 < 30) {
      const day = Math.floor(min / 60 / 24);
      const remainder = day % 10;
      if (remainder === 1 && day !== 11) return day + ' день назад';
      if (remainder > 1 && remainder < 5) return day + ' дня назад';
      return day + ' дней назад'
    }
    
    return new Date(date).toLocaleDateString();
  }