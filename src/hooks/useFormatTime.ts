export const useFormatTime = (dateTimeString: string) => {
    const timePart = dateTimeString.split('T')[1];
    const [hours, minutes] = timePart.split(':');
    return `${hours}:${minutes}`;
  };
  