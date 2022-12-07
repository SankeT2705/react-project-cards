import { useState } from "react";

const BookCreate = ({ onCreate }) => {
    const [title, settitle] = useState('');

    const setbook = (event) => {
        settitle(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        onCreate(title);
        settitle('');
    }

    return (
        <div className="book-create">
            <h3>Add Book </h3>
            <form onSubmit={submit}>
                <label>Book Name:</label>
                <input type="text" className="input" value={title} onChange={setbook} />
                <input className="button" type="submit" />
            </form>
        </div>
    )
}
export default BookCreate;