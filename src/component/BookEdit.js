import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
    const [title, settitle] = useState(book.title);
    const handleedit = (event) => {
        settitle(event.target.value)
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
    }
    return (
        <div>
            <form onSubmit={handlesubmit} className="book-edit" >
                <label>TITLE</label>
                <input className="input" value={title} onChange={handleedit} />
                <button className="button is-primary">save</button>

            </form>
        </div>
    )
}
export default BookEdit;