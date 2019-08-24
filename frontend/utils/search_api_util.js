export const fetchSearch = (key) => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { key }
  })
);