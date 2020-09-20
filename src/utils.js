export const utils = {
  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(date).toLocaleDateString(undefined, options);
  },
  isFutureEvent(date) {
    if (!date) return false;
    return new Date(date).getTime() > Date.now();
  },
};
