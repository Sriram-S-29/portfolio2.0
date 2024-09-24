export const formatTime = function () {

    const now = new Date();
    
    let hours = now.getHours();
    const minutes = now.getMinutes();
 
    const amPm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const minutesPadded = minutes < 10 ? `0${minutes}` : minutes;
   
    const timeString = `${hours}:${minutesPadded} ${amPm}`;
    
    return timeString;
  }
  