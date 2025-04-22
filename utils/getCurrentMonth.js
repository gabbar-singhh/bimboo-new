export default function getCurrentMonth() {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0 = Jan, 11 = Dec
    const currentDate = now.getDate();
  
    // If date is 27 or later, move to next month
    const monthIndex = currentDate >= 27 ? currentMonth + 1 : currentMonth;
  
    // Use modulo for wrapping around December to January
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    return monthNames[monthIndex % 12];
  }
  