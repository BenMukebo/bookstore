const AddNewBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input
        // value={title}
        // onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Book title"
      />
      <select
        name="genre"
        // value={genre}
        // onChange={(e) => setGenre(e.target.value)}
      >
        <option hidden value=""> Category </option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  </div>
);

export default AddNewBook;
