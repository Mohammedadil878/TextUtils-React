import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // });
    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = () => {
    //     if(myStyle.color === 'black') {
    //         setMyStyle({color: 'white', backgroundColor: 'black', border: '1px solid white'})
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({color: 'black', backgroundColor: 'white'})
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark'? 'white':'#042743',
        backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)':'white',
    }

    return (
        <div className="container" >
            <h1 className="my-3" style={{color: props.mode === 'dark'? 'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong> 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>TextUtils</strong> is a versatile web application designed for comprehensive text manipulation and analysis. It offers features like case conversion, allowing users to switch text between uppercase, lowercase, and inverse case formats effortlessly. It also provides space management to remove unnecessary spaces, ensuring clean and readable text. Additional features include quick text copying, concise text summarization, and accurate word and character counts. Users can estimate reading time, aiding in content planning, and preview formatted text before finalizing changes. These functionalities make TextUtils a valuable tool for efficient and effective text processing.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        The <strong>"Free to Use"</strong> feature of the TextUtils website ensures that all its tools and functionalities are accessible without any cost. Users can process their text efficiently, whether it's case conversion, removing extra spaces, word and character counting, or estimating reading time, without requiring subscription or payments. This accessibility makes TextUtils an ideal platform for anyone needing quick and reliable text analysis or formatting, regardless of their budget.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        The <strong>"Browser Compatible"</strong> features of the TextUtils website ensures that it works seamlessly across all modern web browser. Whether you use Chrome, Firefox, Safari, or Edge, TextUtils provides a smooth and consistent experience without requiring additional installations or plugins. This compatibility makes it convenient for users to access and utilize its tools on any device, including desktops. laptops, tablets, or smartphones, ensuring flexibility and ease of use.
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div> */}
        </div>
    );
}
