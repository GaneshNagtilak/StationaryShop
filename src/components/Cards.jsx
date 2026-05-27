const Cards = ({ list, divClass, spanClass }) => (

    list.map((val, i) => (
        <div className={divClass} key={i}>
            <span className={spanClass}>{val.icon}</span>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
        </div>
    ))

);

export default Cards