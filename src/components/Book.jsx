
// import Bookcards from "./Bookcards";
function book(props) {
    console.log(props);
    return (
       <section>
        <div className="bg-slate-500 lg:grid grid-cols-3 gap-4 ">
            <div>{props.bk}</div>
            
        </div>
        </section>
    );
}

export default book;