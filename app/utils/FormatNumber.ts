const FormatNumber = (number: number): string => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export default FormatNumber;
