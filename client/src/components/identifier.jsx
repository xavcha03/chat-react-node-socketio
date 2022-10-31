function Identifier() {
    return (
        <div className="Identifier">
            <form>
                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" name="pseudo" placeholder="pseudo" />
                <button className="form__button">Send</button>
            </form>
        </div>
    )
}

export default Identifier