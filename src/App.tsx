import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
    const [modalformOpen, setmodalformOpen] = useState(false);

    const [modalNext, setModalNext] = useState(false);
    const [yourInfo, setYourInfo] = useState<any>({});

    const [shape, setShape] = useState('');
    const [dimensionA, setDimensionA] = useState('');
    const [dimensionB, setDimensionB] = useState('');
    const [dimensionC, setDimensionC] = useState('');
    const [dimensionD, setDimensionD] = useState('');
    const [dimensionM, setDimensionM] = useState('');
    const [dimensionN, setDimensionN] = useState('');
    const [dimensionX, setDimensionX] = useState('');
    const [sinks, setSinks] = useState('');
    const [sinkType, setSinkType] = useState('');
    const [cutOut, setCutOut] = useState('');
    const [pattern, setPattern] = useState('');

    const [items, setItems] = useState([
        {
            id: 0,
            shape: "",
            dimensionA: "",
            dimensionB: "",
            dimensionC: "",
            dimensionD: "",
            dimensionM: "",
            dimensionN: "",
            dimensionX: "",
            sinks: "",
            sinkType: "",
            cutOut: "",
            pattern: ""
        }
    ]);

    const [stones, setStones] = useState<any>([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch(
                'https://countertop-super.paperjump.com/api/ct/m/stones'
            );
            const data = await response.json();
            setStones(data);
        };
        getData();
    }, []);

    function addItems(e: any) {
        e.preventDefault();
        const updateItems = [
            ...items,
            {
                id: items.length + Math.random(),
                shape: shape,
                dimensionA: dimensionA,
                dimensionB: dimensionB,
                dimensionC: dimensionC,
                dimensionD: dimensionD,
                dimensionM: dimensionM,
                dimensionN: dimensionN,
                dimensionX: dimensionX,
                sinks: sinks,
                sinkType: sinkType,
                cutOut: cutOut,
                pattern: pattern
            }
        ];
        setItems(updateItems);
        setShape("");
        setDimensionA("");
        setDimensionB("");
        setDimensionC("");
        setDimensionD("");
        setDimensionM("");
        setDimensionN("");
        setDimensionX("");
        setSinks("");
        setSinkType("");
        setCutOut("");
        setPattern("");
        setmodalformOpen(false);
    }

    function Delete(id: any) {
        const newData = items.filter((br: any) => br.id !== id);
        setItems(newData);
    }

    const openModal = () => setmodalformOpen(true);
    const closeModal = () => setmodalformOpen(false);

    const openNext = () => setModalNext(true);
    const closeNext = () => setModalNext(false);

    const nextChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setYourInfo((values: any) => ({ ...values, [name]: value }))
    }

    const nextSubmit = (event: any) => {
        event.preventDefault();
        window.location.reload();
    }

    return (
        <>
            <div className='containerhome'>
                {modalformOpen && (
                    <>
                        <div className="modalform">
                            <header className="modalheader">
                                <h3>Add New Item</h3>
                                <button onClick={closeModal} className="closebutton">X</button>
                            </header>
                            <div className="containerform">
                                <form>
                                    <div className="row">
                                        <input type="submit" value="Submit" onClick={addItems} />
                                    </div>
                                    <div className="row">
                                        <div className="col-15">
                                            <label htmlFor="shape">Select a shape</label>
                                        </div>
                                        <div className="containershape">
                                            <div>
                                                <label htmlFor='lshape'><img src={"./img/shape/lshape.jpg"} alt="L Shape" className='shapeimg' /></label>
                                                <input type="checkbox"
                                                    id='lshape'
                                                    className='shapeinput'
                                                    checked={shape === "lshape"}
                                                    onChange={() => setShape("lshape")} />
                                                <b className='shapename'>L Shape</b>
                                            </div>
                                            <div>
                                                <label htmlFor='rectangle'><img src={"./img/shape/rectangle.jpg"} alt="Rectangle" className='shapeimg' /></label>
                                                <input type="checkbox"
                                                    id='rectangle'
                                                    className='shapeinput'
                                                    checked={shape === "rectangle"}
                                                    onChange={() => setShape("rectangle")} />
                                                <b className='shapename'>Rectangle</b>
                                            </div>
                                            <div>
                                                <label htmlFor='square'><img src={"./img/shape/square.jpg"} alt="Square" className='shapeimg' /></label>
                                                <input type="checkbox"
                                                    id='square'
                                                    className='shapeinput'
                                                    checked={shape === "square"}
                                                    onChange={() => setShape("square")} />
                                                <b className='shapename'>Square</b>
                                            </div>
                                        </div>
                                    </div>

                                    {shape === 'lshape' ?
                                        <div className="row">
                                            <div className="col-15">
                                                <label>Set dimensions (in inch)</label>
                                            </div>
                                            <div className="col-85">
                                                <div className="row">
                                                    <div className="col-35">
                                                        <img src={"./img/shape/lshape1.jpg"} alt="L Shape" />
                                                    </div>
                                                    <div className="col-65">
                                                        <input type="text" placeholder="A"
                                                            value={dimensionA}
                                                            onChange={e => setDimensionA(e.target.value)} />
                                                        <input type="text" placeholder="B"
                                                            value={dimensionB}
                                                            onChange={e => setDimensionB(e.target.value)} />
                                                        <input type="text" placeholder="C"
                                                            value={dimensionC}
                                                            onChange={e => setDimensionC(e.target.value)} />
                                                        <input type="text" placeholder="D"
                                                            value={dimensionD}
                                                            onChange={e => setDimensionD(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> :
                                        shape === 'rectangle' ?
                                            <div className="row">
                                                <div className="col-15">
                                                    <label>Set dimensions (in inch)</label>
                                                </div>
                                                <div className="col-85">
                                                    <div className="row">
                                                        <div className="col-35">
                                                            <img src={"./img/shape/rectangle1.jpg"} alt="Rectangle" />
                                                        </div>
                                                        <div className="col-65">
                                                            <input type="text" placeholder="M"
                                                                value={dimensionM}
                                                                onChange={e => setDimensionM(e.target.value)} />
                                                            <input type="text" placeholder="N"
                                                                value={dimensionN}
                                                                onChange={e => setDimensionN(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> :
                                            shape === 'square' ?
                                                <div className="row">
                                                    <div className="col-15">
                                                        <label>Set dimensions (in inch)</label>
                                                    </div>
                                                    <div className="col-85">
                                                        <div className="row">
                                                            <div className="col-35">
                                                                <img src={"./img/shape/square1.jpg"} alt="Square" />
                                                            </div>
                                                            <div className="col-65">
                                                                <input type="text" placeholder="X"
                                                                    value={dimensionX}
                                                                    onChange={e => setDimensionX(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> :
                                                ''}

                                    <div className="row">
                                        <div className="col-15">
                                            <label htmlFor="Sinks">Sinks</label>
                                        </div>
                                        <div className="col-85">
                                            <input type="radio" id="1" checked={sinks === "1"} onChange={() => setSinks("1")} />
                                            <label className='label-right' htmlFor="1">1</label>
                                            <input type="radio" id="2" checked={sinks === "2"} onChange={() => setSinks("2")} />
                                            <label className='label-right' htmlFor="2">2</label>
                                            <input type="radio" id="3" checked={sinks === "3"} onChange={() => setSinks("3")} />
                                            <label className='label-right' htmlFor="3">3</label>
                                            <input type="radio" id="4" checked={sinks === "4"} onChange={() => setSinks("4")} />
                                            <label className='label-right' htmlFor="4">4</label>
                                            <input type="radio" id="5" checked={sinks === "5"} onChange={() => setSinks("5")} />
                                            <label className='label-right' htmlFor="5">5</label>
                                            <input type="radio" id="6" checked={sinks === "6"} onChange={() => setSinks("6")} />
                                            <label htmlFor="6">6</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-15">
                                            <label htmlFor="Sink Type">Sink Type</label>
                                        </div>
                                        <div className="col-85">
                                            <input type="radio" id="Top Mount" checked={sinkType === "Top Mount"} onChange={() => setSinkType("Top Mount")} />
                                            <label className='label-right' htmlFor="Top Mount">Top Mount</label>
                                            <input type="radio" id="Under Mount" checked={sinkType === "Under Mount"} onChange={() => setSinkType("Under Mount")} />
                                            <label htmlFor="Under Mount">Under Mount</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-15">
                                            <label htmlFor="Cut Out">Cooktop Cut Out</label>
                                        </div>
                                        <div className="col-85">
                                            <input type="radio" id="Yes" checked={cutOut === "Yes"} onChange={() => setCutOut("Yes")} />
                                            <label className='label-right' htmlFor="Yes">Yes</label>
                                            <input type="radio" id="No" checked={cutOut === "No"} onChange={() => setCutOut("No")} />
                                            <label htmlFor="No">No</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-15">
                                            <label htmlFor="pattern">Choose A Pattern</label>
                                        </div>
                                        <div className="col-85">

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className='containerstone'>
                                            {stones.map((num: any, index: any) => (
                                                <div key={index}>
                                                    <input type="checkbox"
                                                        className='shapeinput'
                                                        checked={pattern === num.Model}
                                                        onChange={() => setPattern(num.Model)} />
                                                    <label><img
                                                        className='imgstone'
                                                        src={num.Image}
                                                        alt={num.Model}
                                                    /> <br />
                                                        {num.Model}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )}

                <div className='containerbutton'>
                    <button className='button' onClick={openModal}>Add New Item</button>
                    {items.length > 1 && <button className='button' onClick={openNext}>Next</button>}
                </div>

                {modalNext && (
                    <>
                        <div className="overlay">
                            <div className="modalnext">
                                <header className="modalheader">
                                    <h3>Enter Your Information</h3>
                                    <button onClick={closeNext} className="closebutton">X</button>
                                </header>
                                <div className="containerform">
                                    <form onSubmit={nextSubmit}>

                                        <div className="row">
                                            <div className="col-15">
                                                <label htmlFor="your name">Enter your name</label>
                                            </div>
                                            <div className="col-85">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    value={yourInfo.username || ""}
                                                    onChange={nextChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-15">
                                                <label htmlFor="your phone">Enter your phone</label>
                                            </div>
                                            <div className="col-85">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={yourInfo.phone || ""}
                                                    onChange={nextChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-15">
                                                <label htmlFor="your email">Enter your email</label>
                                            </div>
                                            <div className="col-85">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    value={yourInfo.email || ""}
                                                    onChange={nextChange}
                                                />
                                            </div>
                                        </div>

                                        <input type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <br />

                {items.map((item, index) => (
                    <div className='containerhome' key={item.id}>
                        {item.id > 0 && (
                            <div className='card'>
                                <div>No. <br /> {index}</div>
                                <div>
                                    Shape : <br />
                                    {item.shape === 'lshape' ?
                                        <div className='shapeitem'>
                                            <img src={"./img/shape/lshape2.jpg"} alt="L Shape" className='shapeitemimg' />
                                            <b className='shapeitemlabel'>L Shape</b>
                                        </div> :
                                        item.shape === 'rectangle' ?
                                            <div className='shapeitem'>
                                                <img src={"./img/shape/rectangle2.jpg"} alt="Rectangle" className='shapeitemimg' />
                                                <b className='shapeitemlabel'>Rectangle</b>
                                            </div> :
                                            item.shape === 'square' ?
                                                <div className='shapeitem'>
                                                    <img src={"./img/shape/square2.jpg"} alt="Square" className='shapeitemimg' />
                                                    <b className='shapeitemlabel'>Square</b>
                                                </div> :
                                                ''}
                                </div>
                                <div>
                                    {item.shape === 'lshape' ?
                                        <>
                                            Dimensions : <br />
                                            "A" : {item.dimensionA} inch <br />
                                            "B" : {item.dimensionB} inch <br />
                                            "C" : {item.dimensionC} inch <br />
                                            "D" : {item.dimensionD} inch
                                        </> :
                                        item.shape === 'rectangle' ?
                                            <>
                                                Dimensions : <br />
                                                "M" : {item.dimensionM} inch <br />
                                                "N" : {item.dimensionN} inch
                                            </> :
                                            item.shape === 'square' ?
                                                <>
                                                    Dimension : <br />
                                                    "X" : {item.dimensionX} inch
                                                </> :
                                                ''}
                                    <br /><br />
                                    Options : <br />
                                    Sinks : {item.sinks} <br />
                                    Sink Type : {item.sinkType} <br />
                                    Cooktop Cut Out : {item.cutOut}
                                    <br /><br />
                                    Name of Pattern : <br />
                                    {stones.map((num: any, index: any) => (
                                        <div key={index}>
                                            {item.pattern === num.Model ?
                                                num.Model : ''}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    Pattern : <br />
                                    {stones.map((num: any, index: any) => (
                                        <div key={index}>
                                            {item.pattern === num.Model ?
                                                <img
                                                    className='imgstone'
                                                    src={num.Image}
                                                    alt={num.Model}
                                                /> : ''
                                            }
                                        </div>
                                    ))}
                                </div>
                                {item.id > 0 && (
                                    <div className='button' onClick={() => Delete(item.id)}>
                                        X
                                    </div>
                                )}
                            </div>
                        )}
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
}