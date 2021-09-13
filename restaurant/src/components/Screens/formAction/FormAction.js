import "./FormAction.css";

const FormAction = () => {
    return (
        <>
            <form action="" id="search-form">
                <label  /* for="search-box" */ className="fas fa-search"></label>
                <input type="search" placeholder="search here..." name="" id="search-box" />
                <i className="fas fa-times" id="close"></i>
                {/* </input> */}
            </form>
        </>
    )
}

export default FormAction;
