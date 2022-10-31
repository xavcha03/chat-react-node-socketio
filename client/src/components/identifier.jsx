function Identifier({ setUser }) {

    function handleSubmit(e) {
        e.preventDefault();
        setUser(e.target.pseudo.value);
    }

    return (

        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="pseudo">Pseudo</label>
            <input className="form__input" type="text" name="pseudo" placeholder="pseudo" />
            <button className="form__button">Send</button>
        </form>

    )
}

export default Identifier