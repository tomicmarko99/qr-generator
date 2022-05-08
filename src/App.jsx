import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#212529",
          light: "#ffb703",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>
        <span>AtomQR</span> - QR Code Generator
      </h1>
      <div className="box">
        <input type="text" placeholder="e.g. https://google.com" value={url} onChange={(evt) => setUrl(evt.target.value)} />
        <button onClick={GenerateQRCode}>Generate</button>
      </div>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a className="download" href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
