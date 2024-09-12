import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFontAwesome, faHome, faUser, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";

// ...

function FontAwasome() {
    return (
        <>
            <div style={{ margin: "5px" }}>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "red" }} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faFontAwesome} style={{ color: "blue" }} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faHome} style={{ color: "green" }} size="2x"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} style={{ color: "purple" }} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faPlus} style={{ color: "orange" }} size="2x"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserPlus} style={{ color: "yellow" }} size="2x"/>
                </div>
            </div>
        </>
    );
}

export default FontAwasome;
