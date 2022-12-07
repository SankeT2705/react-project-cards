import { useState } from "react";
import BookEdit from "./BookEdit";
const BookShow = ({ book, onDelete, onEdit }) => {

    const [edit, setedit] = useState(false);

    const handledelete = () => {
        onDelete(book.id)
    }
    let content = <h3>{book.title}</h3>
    const handleedit = () => {
        setedit(!edit)
    }
    const handlesubmit = (id, newtitle) => {
        setedit(false);
        onEdit(id, newtitle);
    }
    if (edit) {
        content = <BookEdit book={book} onSubmit={handlesubmit} />;
    }
    return (
        <div className="book-show">
            <img alt="background" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div> {content}</div>
            <div className="actions">
                <input type="button" value="edite" className="edit" onClick={handleedit} />
                <input type="button" value="delete" className="delete" onClick={handledelete} />
            </div>
        </div>
    )
}
export default BookShow;