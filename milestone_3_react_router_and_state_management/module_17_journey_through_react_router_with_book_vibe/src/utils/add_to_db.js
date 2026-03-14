const get_stored_book = () => {
  const stored_book_str = localStorage.getItem("read_list");

  if (stored_book_str) {
    const stored_book_data = JSON.parse(stored_book_str);
    return stored_book_data;
  } else {
    return [];
  }
};

const add_to_stored_db = (id) => {
  const stored_book_data = get_stored_book();

  if (stored_book_data.includes(id)) {
    alert("miya.. eita alrady exist");
  } else {
    stored_book_data.push(id);
    const data = JSON.stringify(stored_book_data);
    localStorage.setItem("read_list", data);
  }
};

export { add_to_stored_db, get_stored_book };
