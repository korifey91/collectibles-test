export function getSearchQuery() {
  if (global.location) {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      return searchQuery;
    }
  }

  return '';
}
